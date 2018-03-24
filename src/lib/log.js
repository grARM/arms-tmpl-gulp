var $$tools = require('./tools.js');
// console.log('NODE_ENV: ', NODE_ENV);
var log = function(){};
if(NODE_ENV != 'prodution'){
    log = console.log;
}

var alertIE = function(str){
    if($$tools.isIE() && window.alertIEopen){
        //alert.apply(this, arguments);
        alert(str);
    }
    
    // alert.apply(this, arguments);
    
};


module.exports = {
    log: log,
    alertIE: alertIE
};