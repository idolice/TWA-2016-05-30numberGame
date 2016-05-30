var ifNumberMatchPosition= function(num,inputArray,randomArray){
    if(inputArray.indexOf(num)==randomArray.indexOf(num)){
        return 1;
    }else{
    return 0;
    }
}
module.exports=ifNumberMatchPosition;