var ifNumberAlreadyExist=require('./existCheck.js');
var ifNumberRepeated=require('./repeateCheck.js');

module.exports=function(numbers){
        var tempArray=numbers;
        var numberArray=[0,1,2,3,4,5,6,7,8,9];
        var numberLength=tempArray.length;
        if(numberLength!=4){
            return 0;
        }
        tempArray.forEach(function(item){
            var numOfRepeat=ifNumberRepeated(item,numbers);
            if(numOfRepeat==1){
                return 0;
            }

        })
        tempArray.forEach(function(item){
           if(ifNumberAlreadyExist(item,numberArray)==0){
                return 0;
            }
        })
        return 1;

}