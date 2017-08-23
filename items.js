var items = [

["intro", "Message", {consentRequired: false,
                html: ["div",
                        ["p", "Welcome to the experiment!"]
                      ]}],

["sep", "Separator", {}],

/// Stimuli go below here.

[["i",0],"AcceptabilityJudgment",{s: "Last week if it isn't."}],
["fill","ComicCaption",{s: "Kate said that the package would arrive.", q: "Will it?", html: "https://imgs.xkcd.com/comics/quotative_like.png"}],
["fill","AcceptabilityJudgment",{s: "Kate said that the package would arrive."}],
["end", "Message", {transfer: 2000,
                html: ["div",
                        ["p", "All done!"]
                      ]}],
];

var shuffleSequence = seq("intro", sepWith("sep", seq(rshuffle("i","fill"))), "end");
var showProgressBar = false;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "Wrong. Please wait for the next trial.",
        ignoreFailure: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use a number key or click on a box.",
        leftComment: "(Very unnatural)",
        rightComment: "(Very natural)"
    },
    "ComicCaption", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true
    }
];