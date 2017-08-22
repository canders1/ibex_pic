/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "ComicCaption",

jqueryWidget: {
    _init: function () {
    	debugger;
        var opts = {
            options:     this.options,
            triggers:    [1],
            children:    ["Message", {html : this.options.html,
            consentRequired: false,
            transfer: null },
            "AcceptabilityJudgment", {s: this.options.s,
            						  q: this.options.q,
            						  as: this.options.as,
            						  hasCorrect:          dget(this.options, "hasCorrect", false),
            						  presentAsScale:      this.options.presentAsScale,
                            presentHorizontally: this.options.presentHorizontally,
                            autoFirstChar:       typeof(this.options.autoFirstChar) == "undefined" ? this.options.presentAsScale : this.options.autoFirstChar,
                            randomOrder:         this.options.randomOrder,
                            showNumbers:         this.options.showNumbers,
                            timeout:             this.options.timeout,
                            instructions:        this.options.instructions,
                            leftComment:         this.options.leftComment,
                            rightComment:        this.options.rightComment
            						  }]
        };

        this.element.VBox(opts);
    }
},

properties: {
    obligatory: ["s", "as"],
    htmlDescription:
        function (opts) {
        	var m = ibex_controller_get_property("Message", "htmlDescription")(opts);
            var a = ibex_controller_get_property("AcceptabilityJudgment", "htmlDescription")(opts);
            var p =
                $("<p>")
                .append($("<p>").append("M: ").append($(m)))
                .append($("<p>").append("A: ").append($(a)));
             return p;
        }
}
});