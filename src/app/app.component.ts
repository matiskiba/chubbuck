import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';

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
    sceneObjective:string;
    substitution:string;
    obstacles:{ [key: number]: string; };
    innerObjectSubstitutions:{ [key: number]: string; };
    actions:{ [key: number]: string; };
    doings:{ [key: number]: string; };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'chubbuck';
  raw:string = "";
  role:string = "mati";
  filename:string = "";
  collection:Scene = <any>{ role: "" };
  //focusedBitContent:BitWord|BitPunctuation = null;
    @ViewChild('chunk') chunkElement: ElementRef;


    generateRaw ()
    {
        this.retainScroll = $("html").scrollTop();

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

        root.find("app-bit-substitution > div").each(function () {
            let val = $(this).text().trim();
            if (val) {
                var chunkId = $(this).closest("app-bit-substitution").data("substitutionid");
                res = res + "///***innerObjectSubstitution:" + chunkId + ":" + val + "***///"
            }
        });

        res = res + "///***role:0:" + this.collection.role + "***///";
        res = res + "///***majorNeed:0:" + this.collection.majorNeed + "***///";
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

    constructor(private cdr:ChangeDetectorRef){
        var self = this;

        $(window).on("resize",function() {
            setTimeout(function() {
                self.retainScroll = $("html").scrollTop();
                self.__updatePositions();
            },0);
        })

        $(document).on("input",".sceneStream",window["_"].throttle(function() {
            setTimeout(function() {
                self.retainScroll = $("html").scrollTop();
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

    updateFileName(v)
    {
        if ( v && this.filename != v ) {
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

            this.updateSceneObjective("");
            this.cdr.detectChanges();
        }
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
      this.collection.innerObjectSubstitutions = {};
      this.collection.roleStreams = [];
      this.collection.sceneObjective = "";
      this.collection.substitution = "";
      this.collection.majorNeed = "";

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
                roleStream.stream.push(bit);
            }
            else if ( part == "///")
            {
                let bit = new Bit()
                bit.bitId = globalId++;
                self.collection.obstacles[bit.bitId] = "";
                self.collection.actions[bit.bitId] = "";
                self.collection.doings[bit.bitId] = "";
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
                  case "majorNeed":
                      self.collection.majorNeed = group[3];
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

        root.find(".bitInfo").each(function() { $(this).css("top","") });

        root.find(".sceneStream .bit.asNewLine > span").each(function() { $(this).css("margin-right",""); });
        root.find(".sceneStream .bit.asNewLine").removeClass("asNewLine");

        $("html").scrollTop(0);
        
        var self = this;

        var lastCR = null;
        var lastBit = null;

        var refY = root.get(0).getBoundingClientRect().y;

        root.find(".sceneStream .bit").each(function() {
            var cr = $(this).get(0).getBoundingClientRect();
            var bitInfo = root.find(".bitInfo[data-bit-id='"+$(this).data("bit-id")+"']");

            if ( lastCR && (lastCR.y+lastCR.height)>cr.y ) {
                $(this).addClass("asNewLinePrep");
                cr = $(this).get(0).getBoundingClientRect();
                $(this).removeClass("asNewLinePrep");

                $(this).addClass("asNewLine")
                var cr_old = cr;
                var old_right = cr_old.x + cr_old.width;

                cr = $(this).get(0).getBoundingClientRect();
                var right = cr.x + cr.width;

                //console.log(right,old_right,$(this).get(0));
                $(this).find(">span").css("margin-right",-(old_right-right)+"px");
                cr = $(this).get(0).getBoundingClientRect();
            }
            bitInfo.css("top",cr.y-refY);

            if ( lastBit )
            {
                var lastBitId = lastBit.data("bit-id");
                var lastBitInfo = root.find(".bitInfo[data-bit-id='"+lastBitId+"']");
                var last_cr = lastBit.find(">span").get(0).getBoundingClientRect();

                lastBitInfo.css("min-height",cr.y+cr.height-last_cr.y-last_cr.height);
            }

            lastBit = $(this);
            lastCR = cr;
        });

        if ( lastBit )
        {
            var lastBitId = lastBit.data("bit-id");
            var lastBitInfo = root.find(".bitInfo[data-bit-id='"+lastBitId+"']");
            var last_cr = lastBit.find(">span").get(0).getBoundingClientRect();

            var final_cr = root.find(".sceneStream > ").last().get(0).getBoundingClientRect();

            lastBitInfo.css("min-height",final_cr.y+final_cr.height-last_cr.y);
        }

        if ( self.retainScroll )
        {
            $("html").scrollTop(self.retainScroll);
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
