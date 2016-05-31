 var number=require('../src/getNumber.js');
 var generate=require('../src/generateNum.js');
 var ifNumberRepeated=require('../src/repeateCheck.js');
 var ifNumberAlreadyExist=require('../src/existCheck.js');
 var compareNumbers=require('../src/compareNumber.js');
 var checkForm=require('../src/checkform.js');

 function mainGame(){
    var totalTimes=6;
    var result;
    var gen=new generate();
    var systemNumbers=gen.generateNumber();
    while(totalTimes>0){
        var answer=new number();
        var userNumbers=answer.getNumbers();
        var check=checkForm(userNumbers);
        if(check!=1){
          console.log("form wrong");
          continue;
        };
        var result=compareNumbers(userNumbers,systemNumbers);
        if(result=='4A0B'){
          result='congratulations!';
          console.log(result);
          return result;
        }else{
            result=result+'\nyou have '+totalTimes+' times';
            console.log(result);
            totalTimes--;
        }

        }
    }

 module.exports=compareNumbers;