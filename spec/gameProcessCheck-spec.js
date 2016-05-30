describe('check if game work or not',function(){
    var number=require('../src/getNumber.js');
    var mainGame=require('../src/numberGame.js');
    var generate=require('../src/generateNum.js');
    var compareNumber=require('../src/compareNumber.js')
   it('win the game at first time',function(){
    var num=new number();
    var result;
    spyOn(num,"getNumbers").and.returnValue([1,2,3,4]);
    var gen=new generate();
    spyOn(gen,"generateNumber").and.returnValue([1,2,3,4]);
    spyOn(console,"log");

    result=compareNumber(num.getNumbers(),gen.generateNumber());

    expect(result).toEqual('4A0B');
   })


})