p1 = "https://imgs.xkcd.com/comics/quotative_like.png";
p2 = "https://imgs.xkcd.com/comics/impostor.png";
p3 = "https://imgs.xkcd.com/comics/cautionary_ghost.png";

var IMAGES_TO_PRELOAD = [p1,p2,p3];

var items = [

["preload", "Preloader", {images: IMAGES_TO_PRELOAD}],

["intro", "Message", {consentRequired: false,
                html: ["div",
                        ["p", "Welcome to the experiment!"]
                      ]}],

["sep", "Separator", {}],

/// Stimuli go below here.

[["i",0],"AcceptabilityJudgment",{s: "Last week if it isn't."}],
["fill","ComicCaption",{s: "xkcd said that linguists are pretty hardcore.", q: "Are they?", html: p1}],
["end", "Message", {transfer: 2000,
                html: ["div",
                        ["p", "All done!"]
                      ]}],
];

var shuffleSequence = seq("preload","intro", sepWith("sep", seq(rshuffle("i","fill"))), "end");
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
        presentAsScale: true,
        instructions: "Use a number key or click on a box.",
        leftComment: "(Very unnatural)",
        rightComment: "(Very natural)"
    }
];