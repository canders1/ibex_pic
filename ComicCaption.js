/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "ComicCaption",

jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove 'click to continue message'.
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "AcceptabilityJudgment", this.options,
                ]
            });
        }
    },

    properties: { 
    	obligatory: ["s", "pic", "q", "as"],
    	htmlDescription:
        function (opts) {
            var m = ibex_controller_get_property("Message", "htmlDescription")(opts);
            var a = ibex_controller_get_property("AcceptabilityJudgment", "htmlDescription")(opts);
            var p =
                $("<p>")
                .append($("<p>").append("Q: ").append($(a)))
                .append("<br>").append($("<b>").text("S:"))
                .append($(m));
             return p;
        }
    }
});