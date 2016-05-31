 var number=require('../src/getNumber.js');
 var generate=require('../src/generateNum.js');
 var ifNumberRepeated=require('../src/repeateCheck.js');
 var ifNumberAlreadyExist=require('../src/existCheck.js');
 var compareNumbers=require('../src/compareNumber.js');
 var checkForm=require('../src/checkform.js');

 function mainGame(){
    var totalTimes=6;
    var result;
    var systemNumbers=generate.generateNumber();
    while(totalTimes>0){
        console.log(`you have ${totalTimes} times`);
        var userNumbers=number.getNumbers();
        var check=checkForm(userNumbers);
        if(check!=1){
          console.log("form wrong");
          continue;
        };
        var result=compareNumbers(userNumbers,systemNumbers);
        if(result=='4A0B'){
          result='congratulations!';
          console.log(result);
          return 1;
        }else{
            console.log(result);
            totalTimes--;
        }

        }
        console.log('you failed');
        return 0;
    }

 module.exports=mainGame;