import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute, Route, Router} from "@angular/router";

export class Punctuation {
  value:string;
}

export class Word {
  value:string;
}

export class NewLine {
    value:string;
}

export class BitInnerObjectSubstitution {
    innerObjectSubstitutionId:number;
}

export class Bit {
    bitId:number;
}

/*
export class BitLine {
  content:Array<BitWord|BitPunctuation|BitInnerObjectSubstitution>;
  first:boolean;
}
*/

export class RoleStream {
  role:string;
  stream:Array<Word|Punctuation|BitInnerObjectSubstitution|Bit|NewLine>;
}

/*
export class BitChunk {
  chunkId:number;
}
*/

export class Scene {
    roleStreams:Array<RoleStream>;
    role:string;
    majorNeed:string;
    default:boolean;
    sceneObstacles:string;
    sceneObjective:string;
    substitution:string;
    obstacles:{ [key: number]: string; };
    innerObjectSubstitutions:{ [key: number]: string; };
    actions:{ [key: number]: string; };
    doings:{ [key: number]: string; };
    inner_monologues:{ [key: number]: string; };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      "[attr.step]":"step"
    }
})
export class AppComponent {
  title = 'chubbuck';
  raw:string = "";
  role:string = "mati";
  filename:string = "";
  collection:Scene = <any>{ role: "" };
  step:string = "0";
  //focusedBitContent:BitWord|BitPunctuation = null;
    @ViewChild('chunk') chunkElement: ElementRef;


    generateRaw ()
    {
        this.retainScroll = $(".scene-container").scrollTop();

        var flag = false;
        var res = "";
        let root = $(this.chunkElement.nativeElement);
        /*
        root.find("app-bit-line").each(function() {
            $(this).append('<span class="bitRole bitLineEnd"></span>');
        });
        root.find(".bitRoleMarker").each(function() {
            $(this).closest("app-bit-role").prepend(this);
        });
        */

        root.find(".sceneStream").find(".bit,.newLine,.punctuation,.word,.bitRoleName,app-bit-substitution").each(function() {
            let text = "";
            if  ( $(this).is("app-bit-substitution") )
            {
                let val = $(this).find(">div").text().trim();
                if ( val )
                    text = "/*SUB" + $(this).data("substitutionid") + "*/";
            }
            else if ( $(this).is(".bit") )
            {
                text = "/*BIT" + $(this).data("bitId") + "*/";
            }
            else
                text = $(this).text().trim();
            if ( $(this).is(".bitRoleName") )
                text += ":";
            if ( $(this).is(".newLine") )
                text += "\n";
            res = res + " " + text;
        });

        root.find(".bitInfo .obstacle").each(function() {
           let val = $(this).html()
           if ( val )
           {
               var chunkId = $(this).closest(".bitInfo").data("bit-id");
               res = res + "///***obstacle:" + chunkId + ":" + val + "***///"
           }
        });

        root.find(".bitInfo .action").each(function() {
            let val = $(this).html()
            if ( val )
            {
                var chunkId = $(this).closest(".bitInfo").data("bit-id");
                res = res + "///***action:" + chunkId + ":" + val + "***///"
            }
        });

        root.find(".bitInfo .doing").each(function() {
            let val = $(this).html()
            if ( val )
            {
                var chunkId = $(this).closest(".bitInfo").data("bit-id");
                res = res + "///***doing:" + chunkId + ":" + val + "***///"
            }
        });

        root.find(".sceneStream app-bit-substitution > div").each(function () {
            let val = $(this).text().trim();
            if (val) {
                var chunkId = $(this).closest("app-bit-substitution").data("substitutionid");
                res = res + "///***innerObjectSubstitution:" + chunkId + ":" + val + "***///"
            }
        });
        
        res = res + "///***role:0:" + this.collection.role + "***///";
        res = res + "///***majorNeed:0:" + this.collection.majorNeed + "***///";
        res = res + "///***default:0:" + (this.collection.default?"1":"0") + "***///";
        res = res + "///***sceneObstacles:0:" + $(this.hostElement.nativeElement).find(".sceneObstacleContent").html() + "***///";
        res = res + "///***substitution:0:" + this.collection.substitution + "***///";
        res = res + "///***sceneObjective:0:" + this.collection.sceneObjective + "***///";

        root.find(".added").remove();

        //console.log(res);

        this.__handleUpdateRaw(res,true);
    }

    handleUpdateRaw() {
        this.__handleUpdateRaw(this.raw,false);
    }

    retainScroll=null;

    constructor(private cdr:ChangeDetectorRef, private hostElement:ElementRef, private router:Router, private route:ActivatedRoute){
        var self = this;

        this.route.paramMap.subscribe(params=> {
            console.log("params",params);
        });

        $(window).on("resize",function() {
            setTimeout(function() {
                //self.retainScroll = $("html").scrollTop();
                self.__updatePositions();
            },0);
        })

        $(document).on("input",".sceneStream,.bitInfo",window["_"].throttle(function() {
            setTimeout(function() {
                //self.retainScroll = $("html").scrollTop();
                console.log("self.retainScroll in",self.retainScroll);
                self.__updatePositions();
            },0);
        },250))

        document.addEventListener('selectionchange', function() {
            var root = $(self.chunkElement.nativeElement);
            root.find(".current").removeClass("current");

            var current = $(window.getSelection().anchorNode).closest(".word,.newLine,.punctuation,.bitRoleName");
            current.addClass("current");
        });

        $(window).on("mouseenter",function(ev) {
            $(".marked").removeClass("marked");
            var bitId = $(ev.target).closest(".bitInfo,.bit").data("bit-id");
            $("[data-bit-id='"+bitId+"']").addClass("marked");
        });

        $(window).bind('keydown', function(event) {
            if (event.ctrlKey || event.metaKey) {
                switch (String.fromCharCode(event.which).toLowerCase()) {
                    case 'b':
                        event.preventDefault();
                        //alert('ctrl-b');
                        var root = $(self.chunkElement.nativeElement);

                        var current = root.find(".current").prepend("<span class='added'>///</span>");

                        self.generateRaw();
                        self.cdr.detectChanges();

                        break;
                    case 'i':
                        event.preventDefault();
                        //alert('ctrl-b');
                        var root = $(self.chunkElement.nativeElement);

                        var current = root.find(".current").prepend("<span class='added'>$$$</span>");

                        self.generateRaw();
                        self.cdr.detectChanges();

                        break;
                }
            }
        });
    }

    updateFileName(v,sceneObjective=null)
    {
        if ( v && this.filename != v ) {
            this.router.navigate([this.filename]);

            this.filename = v.trim();
            this.collection = <any>{sceneObjective:null};
            this.sceneObjectives = [];
            for (var i = 0; i < localStorage.length; i++){
                if ( localStorage.key(i).match(/^collection_v2_/) ) {
                    if ( JSON.parse(localStorage.key(i).replace("collection_v2_", "")).filename == this.filename )
                        this.sceneObjectives.push(JSON.parse(localStorage.key(i).replace("collection_v2_", "")).sceneObject);
                }
            }

            console.log(this.sceneObjectives);

            this.updateSceneObjective(sceneObjective?sceneObjective:"");
            this.cdr.detectChanges();
        }
    }

    updateDefault(v)
    {
        this.collection.default = v;
    }

    updateRole(v)
    {
        if ( v && this.collection.role != v ) {
            this.collection.role = v;
            this.cdr.detectChanges();
        }
    }

    updateSubstitution(v)
    {
        if ( v && this.collection.substitution != v ) {
            this.collection.substitution = v;
            this.cdr.detectChanges();
        }
    }

    updateMajorNeed(v)
    {
        if ( v && this.collection.majorNeed != v ) {
            this.collection.majorNeed = v;
            this.cdr.detectChanges();
        }
    }
    updateSceneObjective(v)
    {
        if ( this.collection.sceneObjective != v ) {
            this.collection.sceneObjective = v;
            this.loadAndHandleUpdateRaw();
            this.collection.sceneObjective = v;
            this.cdr.detectChanges();

            this.router.navigate([this.filename,this.collection.sceneObjective]);
        }
    }
    filenames = [];
    sceneObjectives = [];
    ngAfterViewInit()
    {
        this.filenames = [];
        for (var i = 0; i < localStorage.length; i++){
            if ( localStorage.key(i).match(/^collection_v2_/) ) {
                this.filenames.push(JSON.parse(localStorage.key(i).replace("collection_v2_", "")).filename);
            }
        }
        this.filenames = this.filenames.filter((v, i, a) => a.indexOf(v) === i);

        this.cdr.detectChanges();
    }

    loadAndHandleUpdateRaw() {
        let self = this;

        function load(sceneObjective: string) {
            let data = localStorage.getItem(self.getCollectionName(sceneObjective));
            let text = null;
            if (data) {
                data = JSON.parse(data);
                if (data)
                    text = data[data.length - 1];
            }

            return text;
        }

        let text = load(this.collection.sceneObjective);
        if (text)
            this.__handleUpdateRaw(text, false);
        else
        {
            let text = load("");
            if (text)
                this.__handleUpdateRaw(text, false);
            else
                this.__handleUpdateRaw("", false);
        }
    }

    __handleUpdateRaw(_text,update) {
      let globalId = 0;

      let text = "";
      let later = [];
      let lastRole = null;

      let overrideSceneObjective = !update ? this.collection.sceneObjective : null;

      _text = _text.replace(/(^[ \t]*\n)/gm, "");

        _text.split(/(\/\/\/\*\*\*(?:[\s\S]*?)\*\*\*\/\/\/)/g).forEach(function(t){
          if ( t.match(/\/\/\/\*\*\*[\s\S]*\*\*\*\/\/\//) ) {
              later.push(t);
          }
          else
              text += t;
      });

      (text.match(/\/\*(BIT|SUB)([0-9]+)\*\//g) || []).forEach(function(m) {
          m = <any>m.match(/\/\*(BIT|SUB)([0-9]+)\*\//);
          globalId = Math.max(parseInt(m[2])+1,globalId);
      });

      let self = this;
      let first = true;

      let roleName = this.collection.role;
      if ( !roleName )
          roleName = "";

      this.collection = new Scene();
      this.collection.role = roleName;
      this.collection.obstacles = {};
      this.collection.actions = {};
      this.collection.doings = {};
      this.collection.inner_monologues = {};
      this.collection.innerObjectSubstitutions = {};
      this.collection.roleStreams = [];
      this.collection.sceneObjective = "";
      this.collection.substitution = "";
      this.collection.majorNeed = "";
      this.collection.default = false;

      let roleStream = null;

      let lines = text.split("\n");

      lines.forEach(function(line) {
        line = line.trim();
        let match = line.split(":")[0].trim();
        if ( match.match(new RegExp(
              "^"+
              "(\\/\\*(BIT|SUB)([0-9]+)\\*\\/[ ]*)?"+
              "(['א-ת]+)"+
              "$") ) )
        {
            roleStream = new RoleStream();
            roleStream.role = match.replace(new RegExp("(\\/\\*(BIT|SUB)([0-9]+)\\*\\/[ ]*)?"),"");
            roleStream.stream = [];
            self.collection.roleStreams.push(roleStream);

            var m = match.match(new RegExp("(\\/\\*(BIT|SUB)([0-9]+)\\*\\/)"))

            line = ( m ? m[1] : "" ) + line.split(":",2)[1];
        }

        let parts = [];
        let __parts = line.split(new RegExp(
            "(\\/\\*(?:BIT|SUB)(?:[0-9]+)\\*\\/)","g"));
        __parts.forEach(function(line) {
            let _parts = line.match(new RegExp(
                "(\\/\\*(BIT)([0-9]+)\\*\\/)"+
                "|"+
                "(\\/\\*(SUB)([0-9]+)\\*\\/)"+
                "|"+
                "([a-zA-Z0-9'\"א-ת]+)"+
                "|"+
                "([^a-zA-Z0-9'\"א-ת]+)"
                ,"g"));

            if ( _parts )
                _parts.forEach(function(part) {
                    function doIt(s)
                    {
                        let m = /(.*)(\/\/\/|\$\$\$)(.*)/g.exec(s);
                        if (m) {
                            doIt(m[1]);
                            parts.push(m[2]);
                            doIt(m[3]);
                        }
                        else
                            parts.push(s);
                    }

                    let s = part;
                    doIt(s);

                });
        });

        if ( parts )
          parts.forEach(function(part) {
            part = part.trim();
            if ( !part )
              return;

            let group;
            if ( group = part.match((/\/\*BIT([0-9]+)\*\//)))
            {
                let bit = new Bit()
                bit.bitId = parseInt(group[1]);
                self.collection.obstacles[bit.bitId] = "";
                self.collection.actions[bit.bitId] = "";
                self.collection.doings[bit.bitId] = "";
                self.collection.inner_monologues[bit.bitId] = "";
                roleStream.stream.push(bit);
            }
            else if ( part == "///")
            {
                let bit = new Bit()
                bit.bitId = globalId++;
                self.collection.obstacles[bit.bitId] = "";
                self.collection.actions[bit.bitId] = "";
                self.collection.doings[bit.bitId] = "";
                self.collection.inner_monologues[bit.bitId] = "";
                roleStream.stream.push(bit);
            }
            else if ( group = part.match((/\/\*SUB([0-9]+)\*\//))) {
                let subsctitution = new BitInnerObjectSubstitution();
                subsctitution.innerObjectSubstitutionId = parseInt(group[1])
                self.collection.innerObjectSubstitutions[subsctitution.innerObjectSubstitutionId] = "תחליף";
                roleStream.stream.push(subsctitution);
            }
            else if ( part == "$$$")
            {
                let subsctitution = new BitInnerObjectSubstitution();
                subsctitution.innerObjectSubstitutionId = globalId++;
                self.collection.innerObjectSubstitutions[subsctitution.innerObjectSubstitutionId] = "תחליף";
                roleStream.stream.push(subsctitution);
            }
            else if ( part.match(/^[א-ת'"0-9a-z]+$/) )
            {
              let word = new Word();
              word.value = part;
                roleStream.stream.push(word);
            }
            else
            {
                let punctuation = new Punctuation();
                punctuation.value = part;
                roleStream.stream.push(punctuation);
            }
          });
          if ( roleStream.stream.length && !(roleStream.stream[roleStream.stream.length-1] instanceof NewLine) && !(roleStream.stream[roleStream.stream.length-1] instanceof Bit) )
            roleStream.stream.push(new NewLine());
      });

      if ( overrideSceneObjective )
          self.collection.sceneObjective = overrideSceneObjective;

      later.forEach(function(l) {
          let group;
          if ( group = l.match(/\/\/\/\*\*\*([a-zA-Z]+):([0-9]+):([\s\S]*)\*\*\*\/\/\//) ) {
              let id = parseInt(group[2]);
              switch ( group[1] )
              {
                  case "role":
                      self.collection.role = group[3];
                      break;
                  case "substitution":
                      self.collection.substitution = group[3];
                      break;
                  case "sceneObstacles":
                      self.collection.sceneObstacles = group[3];
                      break;
                  case "majorNeed":
                      self.collection.majorNeed = group[3];
                      break;
                  case "default":
                      self.collection.default = parseInt(group[3]) == 1;
                      break;
                  case "sceneObjective":
                      if ( !overrideSceneObjective )
                      self.collection.sceneObjective = group[3];
                      break;
                  case "innerObjectSubstitution":
                      self.collection.innerObjectSubstitutions[id] = group[3];
                      break;
                  case "obstacle":
                      self.collection.obstacles[id] = group[3];
                      break;
                  case "action":
                      self.collection.actions[id] = group[3];
                      break;
                  case "doing":
                      self.collection.doings[id] = group[3];
                      break;
                  case "inner_monologue":
                      self.collection.inner_monologues[id] = group[3];
                      break;
              }
          }
      });

      console.log(this.collection);

      this.raw = _text;

      if ( update ) {
          let data:any = localStorage.getItem(self.getCurrentCollectionName());
          if ( data )
              data = JSON.parse(data);

          if ( !data )
              data = [];

          data.push(_text);

          localStorage.setItem(self.getCurrentCollectionName(), JSON.stringify(data));
      }

      this.processedFlag = false;
        //root.find(".sceneStream *")

    }
    processedFlag = false;

    ngAfterViewChecked()
    {
        if ( !this.processedFlag )
        {
            var root = $(this.chunkElement.nativeElement);
            root.find(".sceneStream").html(root.find(".sceneStreamGenerated").html());
            root.find(".sceneStream *").contents().each(function() {
                if(this.nodeType === Node.COMMENT_NODE) {
                    $(this).remove();
                }
            });
            this.__updatePositions();

            this.processedFlag = true;
        }
    }

    __updatePositions() {
        var root = $(this.chunkElement.nativeElement);

        //$("html").scrollTop(0);
        
        var self = this;

        var lastCR = null;
        var lastBit = null;

        console.log($(".scene-container").scrollTop());
        var st = root.scrollTop();
        root.css("height","auto");

        root.find(".bitInfo").each(function() { $(this).css("top","").css("min-height","") });

        root.find(".sceneStream .bit > span").each(function() { $(this).css("margin-top","")});
        root.find(".sceneStream .bit.asNewLine > span").each(function() { $(this).css("margin-right",""); });
        root.find(".sceneStream .bit.asNewLine").removeClass("asNewLine");

        //root.scrollTop(0);
        var refY = root.find(">*:first-child").offset().top;

        function gbcr(elm)
        {
            var cr:any = {};
            var offset = $(elm).offset();
            cr.y = offset.top - refY;
            cr.x = offset.left;
            cr.width = $(elm).width();
            cr.height = $(elm).height();
            return cr;
        }
        root.find(".sceneStream .bit").each(function() {

            var cr = gbcr($(this).find(">span"));
            var bitInfo = root.find(".bitInfo[data-bit-id='"+$(this).data("bit-id")+"']");

            console.log("----",$(this).data("bit-id"),$(this).get(0),$(this).find(">span").get(0));

            if ( lastCR && (lastCR.y+lastCR.height - 1)>cr.y ) {
                $(this).addClass("asNewLinePrep");
                cr = gbcr($(this).find(">span"));
                $(this).removeClass("asNewLinePrep");

                $(this).addClass("asNewLine")
                var cr_old = cr;
                var old_right = cr_old.x + cr_old.width;

                cr = gbcr($(this).find(">span"));
                var right = cr.x + cr.width;

                //console.log(right,old_right,$(this).get(0));
                $(this).find(">span").css("margin-right",-(old_right-right)+"px");
                cr = gbcr($(this).find(">span"));
                console.log("new line...");
            }

            if ( lastCR && ( lastCR.y + lastCR.height - 1 ) > cr.y ) {
                //console.log("wow",cr.y);
                $(this).find(">span").css("margin-top", (lastCR.y + lastCR.height) - cr.y);
                cr = gbcr($(this).find(">span"));
            }

            bitInfo.css("top",cr.y);

            //console.log(cr.height,bitInfo.height(),bitInfo.attr("style"));
            bitInfo.find(">*").each(function() {
                cr.height = Math.max(cr.height,$(this).innerHeight());
            });

            if ( lastBit )
            {
                var lastBitId = lastBit.data("bit-id");
                var lastBitInfo = root.find(".bitInfo[data-bit-id='"+lastBitId+"']");
                var last_cr = gbcr(lastBit.find(">span"));

                lastBitInfo.css("min-height",cr.y-last_cr.y);
            }

            console.log(cr.height,cr);
            lastBit = $(this);
            lastCR = cr;
        });

        if ( lastBit )
        {
            var lastBitId = lastBit.data("bit-id");
            var lastBitInfo = root.find(".bitInfo[data-bit-id='"+lastBitId+"']");
            var last_cr = gbcr(lastBit.find(">span"));

            var final_cr = gbcr(root.find(".sceneStream > *").last());

            lastBitInfo.css("min-height",final_cr.y+final_cr.height-last_cr.y);
        }

        root.css("height","");
        root.scrollTop(st);

        console.log("st",st);

        if ( self.retainScroll )
        {
            root.scrollTop(self.retainScroll);
            console.log("self.retainScroll out",$("html").scrollTop());
            self.retainScroll = null;
        }
    }

    private getCurrentCollectionName()
    {
        return this.getCollectionName(this.collection.sceneObjective);
    }

    private getCollectionName(sceneObjective:string){
        return 'collection_v2_' + JSON.stringify({
           filename:this.filename,
           sceneObject:sceneObjective
        });
    }
}
