var ifNumberAlreadyExist=require('./existCheck.js');
var ifNumberMatchPosition=require('./positionCheck.js');
function compareNumber(inputArray,randomArray){
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
module.exports=compareNumber;