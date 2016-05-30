function getNumbers(){
    return [1,2,3,4];
}

function checkForm(numbers){
        var tempArray=numbers;
        var numberLength=tempArray.length;
        if(numberLength!=4){
            return 2;
        }
        tempArray.forEach(function(item){
            var numOfRepeat=ifNumberAlreadyExist(item,numbers);
            if(numOfRepeat==1){
                return 3;
            }

        })
        tempArray.forEach(function(item){
            if(item<0||item>9){
                return 4;
            }
        })
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

function generateNumber(){
    var randomNumbers=[];
    while(randomNumbers.length<4){
    var randomNumber=Math.floor(Math.random()*10);
    if(ifNumberAlreadyExist(randomNumber,randomNumbers)==0){
        randomNumbers.push(randomNumber);
    }
    }
    return randomNumbers;
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
    var systemNumbers=generateNumber();
    while(totalTimes>0){
        var userNumbers=getNumbers();
        var check=checkForm(userNumbers);
        if(check!=1){
            continue;
        }
        var result=compareNumbers(userNumbers,systemNumbers);
        if(result=='4A0B'){
         result='congratulations!';
         console.log(result);
         return result;
        }else{
            result=result+'\nyou have'+totalTimes+'times';
            console.log(result);
            totalTimes--;
            continue;
        }
        }
        result='you failed';
        console.log(result);

    }
