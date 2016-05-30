
var ifNumberAlreadyExist=require('./existCheck.js');
var generate=function(){
    var generateNumber=function(){
        var randomNumbers=[];
        while(randomNumbers.length<4){
        var randomNumber=Math.floor(Math.random()*10);
        if(ifNumberAlreadyExist(randomNumber,randomNumbers)==0){
            randomNumbers.push(randomNumber);
        }
        }
        return randomNumbers;
    };
    return {generateNumber:generateNumber};
}
module.exports=generate;