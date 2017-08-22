var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "ComicCaption", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true
    }
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "How would you like to answer this question?",
                              as: ["Press 1 or click here for this answer.",
                                   "Press 2 or click here for this answer.",
                                   "Press 3 or click here for this answer."]}],
    ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],


    [["s1",1], "DashedSentence", {s: "The journalist interviewed an actress who he knew to be shy of publicity after meeting on a previous occasion."},
               "Question",       {q: "The actress was:", as: ["shy", "publicity-seeking", "impatient"]}],
    [["s2",1], "DashedSentence", {s: "The journalist interviewed an actress who after meeting on a previous occasion he knew to be shy of publicity."},
               "Question",       {q: "The actress was:", as: ["shy", "publicity-seeking", "impatient"]}],

    // The first question will be chosen if the first sentence from the previous two items is chosen;
    // the second question will be chosen if the second sentence from the previous pair of items is chosen.

    [["q1",[100,1]], "AcceptabilityJudgment", {s: "Which actress did the journalist interview after meeting her PA on a previous occasion?"}],
    [["q2",[100,1]], "ComicCaption", {s: "Which actress did the journalist interview after meeting her PA on a previous occasion?", q: ["???"], pic: ["huh"]}],
];

