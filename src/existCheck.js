var ifNumberAlreadyExist= function(num,Array){
    for(var i=0;i<Array.length;i++){
        if(num==Array[i]){
            return 1;
        }
    }return 0;
}
module.exports=ifNumberAlreadyExist;