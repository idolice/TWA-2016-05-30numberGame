describe('number game test',function(){
describe('check input Number',function(){
var output;


it('input should be number',function(){
    //given
    var inputArray;
    var judgeArray=[];
    //when
    inputArray=getNumbers();
    inputArray.forEach(function(item){
        if(item<0||item>9){
            judgeArray.push(0);
        }else{
            judgeArray.push(1);
        }
    })
    //then
    expect(judgeArray).toEqual([1,1,1,1]);

})

it('input length should be 4',function(){
    //given
    var inputArray=[];
    var numOfArray=0;
    //when
    inputArray=getNumbers();
    numOfArray=inputArray.length;
    //then
    expect(numOfArray).toEqual(4);

})

it('input should not repeat',function(){
    //given
    var inputArray=[];
    var tempArray=[];
    var judgeArray=[];
    //when
    inputArray=getNumbers();
    tempArray=inputArray;
    tempArray.forEach(function(item){
        var numOfRepeat=ifNumberAlreadyExist(item,inputArray);
        judgeArray.push(numOfRepeat);
    })

    //then
    expect(judgeArray).toEqual([0,0,0,0]);

})

it('print D,C,B,A  grades are 60,70,80,90',function(){
    //given
    var inputs2=[60,70,80,90];
    var text2='outputs:\nD\nC\nB\nA\n';
    //when
     output=getGradesLevel(inputs2);
    //then
    expect(output).toEqual(text2);

})


})

describe('check result',function(){

it('should print 0A0B if inputs are all wrong',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[5,6,7,8];
    //when
    var result=compareNumber(userInput,randomNumber);
    //then
    expect(result).toEqual('0A0B');

})

it('should print 4A0B if inputs are all right',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[1,2,3,4];
    //when
    var result=compareNumber(userInput,randomNumber);
    //then
    expect(result).toEqual('4A0B');

})

it('should print 2A2B if inputs are half right',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[1,2,4,3];
    //when
    var result=compareNumber(userInput,randomNumber);
    //then
    expect(result).toEqual('0A0B');

})

it('should print 0A4B if inputs number are all right but position are all wrong',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[4,3,2,1];
    //when
    var result=compareNumber(userInput,randomNumber);
    //then
    expect(result).toEqual('0A4B');

})
})


})
