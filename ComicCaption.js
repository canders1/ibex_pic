/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "ComicCaption",

jqueryWidget: {
    _init: function () {
    	debugger;
        this.cssPrefix = this.options._cssPrefix;
        this.utils = this.options._utils;
        var fullhtml = "<p><img class=\"img-responsive\" src=\"".concat(this.options.html).concat("\"></p>");
        console.log(fullhtml);
        var opts = {
            options:     this.options,
            padding: "1em",
            triggers:    [2],
            children:    [
                        "Message", 
                            {html : fullhtml,
                            transfer: null,
                            consentRequired: false},
                        "FlashSentence",
                            {s: this.options.s,
                            timeout: null,
                            audio: this.options.audio,
                            audioMessage: this.options.audioMessage,
                            audioTrigger: this.options.audioTrigger},
                        "Question", 
                            {q:                   this.options.q,
                            as:                  this.options.as,
                            hasCorrect:          dget(this.options, "hasCorrect", false),
                            presentAsScale:      this.options.presentAsScale,
                            presentHorizontally: this.options.presentHorizontally,
                            autoFirstChar:       typeof(this.options.autoFirstChar) == "undefined" ? this.options.presentAsScale : this.options.autoFirstChar,
                            randomOrder:         this.options.randomOrder,
                            showNumbers:         this.options.showNumbers,
                            timeout:             this.options.timeout,
                            instructions:        this.options.instructions,
                            leftComment:         this.options.leftComment,
                            rightComment:        this.options.rightComment}
                            ]};
        this.element.VBox(opts);
    }
},

properties: {
    obligatory: ["s", "as", "q", "html"],
    htmlDescription:
        function (opts) {
            var s = ibex_controller_get_property("FlashSentence", "htmlDescription")(opts);
            var q = ibex_controller_get_property("Question", "htmlDescription")(opts);
            var p =
                $(document.createElement("div"))
                .append($("<p>").append("Q: ").append($(q)))
                .append("<br>").append($("<b>").text("S:"))
                .append($(s));
             return p;
        }}
});