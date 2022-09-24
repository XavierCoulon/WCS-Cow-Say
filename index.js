const information = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${information.myProfile.firstName} ${information.myProfile.lastName}mooooooooooo, from ${information.myProfile.localisation}.`,
    e : "xX",
    T : "W "
}));