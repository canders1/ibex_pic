/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "ComicCaption",

jqueryWidget: {
    _init: function () {
    	debugger;
        var opts = {
            options:     this.options,
            padding: "2em",
            triggers:    [1],
            children:    ["Message", {html : this.options.html,
                                      transfer: dget(this.options, "transfer", null),
                                      consentRequired: dget(this.options, "consentRequired",false)
                                      },
                                      "Message", {html : this.options.html,
                                      transfer: dget(this.options, "transfer", "click"),
                                      consentRequired: dget(this.options, "consentRequired",false)
                                      },
            /*"AcceptabilityJudgment", {s: this.options.s,
            						  q: this.options.q,
            						  as: this.options.as,
                                      instructions:        this.options.instructions,
            						  hasCorrect:          dget(this.options, "hasCorrect", false),
                                    autoFirstChar:       typeof(this.options.autoFirstChar) == "undefined" ? this.options.presentAsScale : this.options.autoFirstChar,
                                    showNumbers:         this.options.showNumbers,
                                    randomOrder:         this.options.randomOrder,
                                      presentAsScale:      this.options.presentAsScale,
                                    leftComment:         this.options.leftComment,
                                    rightComment:        this.options.rightComment,
                                    timeout:             this.options.timeout
            						  }*/]
        };

        this.element.VBox(opts);
    }
},

properties: {
    obligatory: ["s", "as", "q", "html"],
    htmlDescription:
        function (opts) {
        	var m = ibex_controller_get_property("Message", "htmlDescription")(opts);
            var n = ibex_controller_get_property("Message", "htmlDescription")(opts);
            //var a = ibex_controller_get_property("AcceptabilityJudgment", "htmlDescription")(opts);
            var p =
                $("<p>")
                .append("M: ").append($(m))
                .append("A: ").append($(n));
             return p;
        }
}
});