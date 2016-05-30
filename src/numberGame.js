 var number=require('../src/getNumber.js');
 var generate=require('../src/generateNum.js');

function checkForm(numbers){
        var tempArray=numbers;
        var Array=[0,1,2,3,4,5,6,7,8,9];
        var numberLength=tempArray.length;
        if(numberLength!=4){
            return 0;
        }else
        if(ifNumberRepeated(tempArray)==0){
            return 0;
        }else{
        tempArray.forEach(function(item){
           if(ifNumberAlreadyExist(item,Array)==0){
                return 0;
            }
        });}
        return 1;

}

function ifNumberRepeated(array){
    var index;
    for(var i=0;i<array.length;i++){
    for(var j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            index=[i,j];
            return 0;
        }
    }
   }
   return 1;

}

function ifNumberAlreadyExist(num,Array){
    for(var i=0;i<Array.length;i++){
        if(num==Array[i]){
            return 1;
        }
    }return 0;
}

function ifNumberMatchPosition(num,inputArray,randomArray){
    if(inputArray.indexOf(num)==randomArray.indexOf(num)){
        return 1;
    }else{
    return 0;
    }
}



function compareNumbers(inputArray,randomArray){
    var tempArray=inputArray;
    var numOfA=0;
    var numOfB=0;
    tempArray.forEach(function(item){
        var tempNum=ifNumberAlreadyExist(item,randomArray);
        if(tempNum==1){
            var tempPos=ifNumberMatchPosition(item,inputArray,randomArray);
            if(tempPos==1){
                numOfA++;
            }else{
                numOfB++;
            }
        }
    })
    var outputString=numOfA+'A'+numOfB+'B';
    return outputString;
}



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