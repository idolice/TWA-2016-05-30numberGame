describe('check result',function(){

var compareNumbers=require('../src/compareNumber.js');
it('should print 0A0B if inputs are all wrong',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[5,6,7,8];
    //when
    var result=compareNumbers(userInput,randomNumber);
    //then
    expect(result).toEqual('0A0B');

})

it('should print 4A0B if inputs are all right',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[1,2,3,4];
    //when
    var result=compareNumbers(userInput,randomNumber);
    //then
    expect(result).toEqual('4A0B');

})

it('should print 2A2B if inputs are half right',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[1,2,4,3];
    //when
    var result=compareNumbers(userInput,randomNumber);
    //then
    expect(result).toEqual('2A2B');

})

it('should print 0A4B if inputs number are all right but position are all wrong',function(){
    //given
    var userInput=[1,2,3,4];
    var randomNumber=[4,3,2,1];
    //when
    var result=compareNumbers(userInput,randomNumber);
    //then
    expect(result).toEqual('0A4B');

})
})