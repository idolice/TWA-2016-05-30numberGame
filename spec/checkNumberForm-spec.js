describe('check input Number',function(){

var checkForm=require('../src/checkform.js');
var number=require('../src/getNumber.js');
beforeEach(function(){
    var num=new number();
    spyOn(num,"getNumbers").and.returnValue([1,2,3,4]);
})

it('input should be number',function(){
    //given
    var inputArray;
    //when
    inputArray=['A',1,2,3];

    //then
    expect(checkForm(inputArray)).toEqual(1);

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
     expect(checkForm(inputArray)).toEqual(1);

})



})
