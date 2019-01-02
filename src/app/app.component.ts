import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';

export class BitPunctuation {
  value:string;
}

export class BitWord {
  value:string;
}

export class BitSubstitution {
    substitutionId:number;
}


export class BitLine {
  content:Array<BitWord|BitPunctuation|BitSubstitution>;
  first:boolean;
}

export class BitRoleChunk {
  role:string;
  first:boolean;
  lines:Array<BitLine>;
}

export class BitChunk {
  roles:Array<BitRoleChunk>;
  chunkId:number;
}

export class Bits {
    chunks:Array<BitChunk>;
    role:string;
    majorNeed:string;
    sceneObjective:string;
    obstacles:{ [key: number]: string; };
    substitutions:{ [key: number]: string; };
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
  collection:Bits = <any>{ role: "" };
  focusedBitContent:BitWord|BitPunctuation = null;
    @ViewChild('chunk') chunkElement: ElementRef;


    generateRaw()
    {
        var flag = false;
        var res = "";
        let root = $(this.chunkElement.nativeElement);
        root.find(".scene").find("app-bit-line").each(function() {
            $(this).append('<span class="bitRole bitLineEnd"></span>');
        });
        root.find(".scene").find(".bitRoleMarker").each(function() {
            $(this).closest("app-bit-role").prepend(this);
        });

        root.find(".scene").find("app-bit-chunk,.app-bit-punctuation,.app-bit-word,.bitRole,app-bit-substitution").each(function() {
            let text = "";
            if  ( $(this).is("app-bit-substitution") )
            {
                let val = $(this).find(">div").text().trim();
                if ( val )
                    text = "/*SUB" + $(this).data("substitutionid") + "*/";
            }
            else if ( $(this).is(".bitRoleMarker") )
            {
                text = "/*BIT" + $(this).data("chunkid") + "*/";
            }
            else
                text = $(this).text().trim();
            if ( $(this).is(".bitRoleName") )
                text += ":";
            if ( $(this).is(".bitLineEnd") )
                text += "\n";
            res = res + " " + text;
        });

        root.find("app-bit-chunk .obstacles .obstacleText").each(function() {
           let val = $(this).text().trim();
           console.log("wow",val);
           if ( val )
           {
               var chunkId = $(this).closest("app-bit-chunk").data("chunkid");
               res = res + "///***obstacle:" + chunkId + ":" + val + "***///"
           }
        });
        root.find("app-bit-chunk .actions textarea").each(function() {
            let val = $(this).val().trim();
            if ( val )
            {
                var chunkId = $(this).closest("app-bit-chunk").data("chunkid");
                res = res + "///***action:" + chunkId + ":" + val + "***///"
            }
        });
        root.find("app-bit-chunk .doings textarea").each(function() {
            let val = $(this).val().trim();
            if ( val )
            {
                var chunkId = $(this).closest("app-bit-chunk").data("chunkid");
                res = res + "///***doing:" + chunkId + ":" + val + "***///"
            }
        });
        root.find("app-bit-substitution > div").each(function() {
            let val = $(this).text().trim();
            if ( val )
            {
                var chunkId = $(this).closest("app-bit-substitution").data("substitutionid");
                res = res + "///***substitution:" + chunkId + ":" + val + "***///"
            }
        });

        res = res + "///***role:0:" + this.collection.role + "***///";
        res = res + "///***majorNeed:0:" + this.collection.majorNeed + "***///";
        res = res + "///***sceneObjective:0:" + this.collection.sceneObjective + "***///";

        //console.log(res);

        this.__handleUpdateRaw(res,true);
    }

    constructor(private cdr:ChangeDetectorRef){}

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

      this.collection = new Bits();
      this.collection.role = roleName;
      this.collection.obstacles = {};
      this.collection.actions = {};
      this.collection.doings = {};
      this.collection.substitutions = {};

      let chunk = new BitChunk();
      chunk.chunkId = globalId++;
      self.collection.obstacles[chunk.chunkId] = "";
      self.collection.actions[chunk.chunkId] = "";
      self.collection.doings[chunk.chunkId] = "";
      chunk.roles = [];

      this.collection.chunks = [chunk];

      let role = null;

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
            role = new BitRoleChunk();
            role.first = true;
            role.role = match.replace(new RegExp("(\\/\\*(BIT|SUB)([0-9]+)\\*\\/[ ]*)?"),"");
            lastRole = role.role;
            role.lines = [];
            chunk.roles.push(role);

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

        let bitLine = new BitLine();
        bitLine.content = [];
        bitLine.first = first;
        first = false;

        if ( !role )
        {
            role = new BitRoleChunk();
            role.first = true;
            role.role = lastRole;
            role.lines = [];
            chunk.roles.push(role);
        }

        role.lines.push(bitLine);

        if ( parts )
          parts.forEach(function(part) {
            part = part.trim();
            if ( !part )
              return;

            let group;
            if ( group = part.match((/\/\*BIT([0-9]+)\*\//)))
            {
                if (
                    chunk.roles.length == 1 &&
                    chunk.roles[0].lines.length == 1 &&
                    chunk.roles[0].lines[0].content.length == 0 )
                {
                    chunk.chunkId = parseInt(group[1]);
                    return;
                }

                chunk = new BitChunk();
                chunk.chunkId = parseInt(group[1]);
                self.collection.obstacles[chunk.chunkId] = "";
                self.collection.actions[chunk.chunkId] = "";
                self.collection.doings[chunk.chunkId] = "";
                chunk.roles = [];
                self.collection.chunks.push(chunk);

                role = new BitRoleChunk();
                role.first = false;
                role.role = lastRole;
                role.lines = [];
                chunk.roles.push(role);

                bitLine = new BitLine();
                bitLine.content = [];
                bitLine.first = true;
                first = false;

                role.lines.push(bitLine);

                return;
            }
            else if ( part == "///")
            {
                chunk = new BitChunk();
                chunk.chunkId = globalId++;
                self.collection.obstacles[chunk.chunkId] = "";
                self.collection.actions[chunk.chunkId] = "";
                self.collection.doings[chunk.chunkId] = "";
                chunk.roles = [];
                self.collection.chunks.push(chunk);

                role = new BitRoleChunk();
                role.first = false;
                role.role = lastRole;
                role.lines = [];
                chunk.roles.push(role);

                bitLine = new BitLine();
                bitLine.content = [];
                bitLine.first = true;
                first = false;

                role.lines.push(bitLine);

                return;
            }
            else if ( group = part.match((/\/\*SUB([0-9]+)\*\//))) {
                let subsctitution = new BitSubstitution();
                subsctitution.substitutionId = parseInt(group[1])
                bitLine.content.push(subsctitution)
            }
            else if ( part == "$$$")
            {
                let subsctitution = new BitSubstitution();
                subsctitution.substitutionId = globalId++;
                bitLine.content.push(subsctitution)
                self.collection.substitutions[subsctitution.substitutionId] = "תחליף";
            }
            else if ( part.match(/^[א-ת'"0-9a-z]+$/) )
            {
              let word = new BitWord();
              word.value = part;
              bitLine.content.push(word)
            }
            else
            {
                let punctuation = new BitPunctuation();
                punctuation.value = part;
                bitLine.content.push(punctuation)
            }
          });
      });

      later.forEach(function(l) {
          let group;
          if ( group = l.match(/\/\/\/\*\*\*([a-zA-Z]+):([0-9]+):([\s\S]*)\*\*\*\/\/\//) ) {
              let id = parseInt(group[2]);
              switch ( group[1] )
              {
                  case "role":
                      self.collection.role = group[3];
                      break;
                  case "majorNeed":
                      self.collection.majorNeed = group[3];
                      break;
                  case "sceneObjective":
                      self.collection.sceneObjective = group[3];
                      break;
                  case "substitution":
                      self.collection.substitutions[id] = group[3];
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
