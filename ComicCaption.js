/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "ComicCaption",

jqueryWidget: {
    _init: function () {
    	debugger;
        this.cssPrefix = this.options._cssPrefix;
        this.utils = this.options._utils;
        var opts = {
            options:     this.options,
            padding: "2em",
            triggers:    [2],
            children:    [
                        "Message", 
                            {html : this.options.html,
                            transfer: dget(this.options, "transfer", null),
                            consentRequired: dget(this.options, "consentRequired",false)},
                        "FlashSentence",
                            {s: this.options.s,
                            timeout: null, // Already present for 'Question'
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
        console.log("Before");
        this.element.VBox(opts);
        console.log("After");
    }
},

properties: {
    obligatory: ["s", "as", "q", "html"],
    htmlDescription:
        function (opts) {
        	var m = ibex_controller_get_property("Message", "htmlDescription")(opts);
            var s = ibex_controller_get_property("FlashSentence", "htmlDescription")(opts);
            var q = ibex_controller_get_property("Question", "htmlDescription")(opts);
            var p =
                $(document.createElement("div"))
                .append($("<p>").append("M: ").append($(m)))
                .append($("<p>").append("Q: ").append($(q)))
                .append("<br>").append($("<b>").text("S:"))
                .append($(s));
             return p;
        }
}
});