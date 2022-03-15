const information = require('./information');

var cowsay = require("cowsay");


console.log(cowsay.say({

    text : `I'm ${information.name} from Wild Code School of ${information.campus}`,
    e : "oO",
    T : "U "
}));


