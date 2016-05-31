
var ifNumberAlreadyExist=require('./existCheck.js');

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


module.exports={generateNumber:generateNumber};