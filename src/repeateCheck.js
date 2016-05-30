var ifNumberRepeated=function (num,array){
    var times=0;
    array.forEach(function(item){
        if(item==num){
            times++;
        }
    })
    if(times>1){
        return  1;
    }else{
        return 0;
    }

}
module.exports=ifNumberRepeated;