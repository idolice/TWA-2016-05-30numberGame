describe('number game test',function(){
describe('check input Number',function(){
var output;


it('input should be number',function(){
    //given
    var inputArray;
    //when
    inputArray=['A',1,2,3];

    //then
    expect(checkForm(inputArray)).toEqual(0);

})

it('input length should be 4',function(){
    //given
    var inputArray;
    //when
    inputArray=[1,2,3];

    //then
    expect(checkForm(inputArray)).toEqual(0);

})

it('input should not repeat',function(){
    //given
    var inputArray=[];
    //when
   inputArray=[1,1,2,2]
    //then
     expect(checkForm(inputArray)).toEqual(0);

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
