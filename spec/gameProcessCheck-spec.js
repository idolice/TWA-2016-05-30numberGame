describe('check if game work or not',function(){
    var number=require('../src/getNumber.js');
    var mainGame=require('../src/numberGame.js');
    var generate=require('../src/generateNum.js');
    var compareNumber=require('../src/compareNumber.js');

    beforeEach(function(){
    spyOn(generate,"generateNumber").and.returnValue([1,2,3,4]);
    })
   it('win the game at first time',function(){
    var result;
    spyOn(number,"getNumbers").and.returnValue([1,2,3,4]);
    spyOn(console,"log");

    result=mainGame();

    expect(result).toEqual(1);
   })

   it('lose game',function(){
    var result;
    spyOn(number,"getNumbers").and.returnValue([1,2,3,5],[1,5,6,7],[6,5,3,4],[2,4,6,8],[5,6,7,8],[2,3,4,5]);

    result=mainGame();

    expect(result).toEqual(0);
   })
//
//   it('win game when guess three times',function(){
//    var result;
//    spyOn(number,"getNumbers").and.returnValue([1,2,3,5],[1,5,6,7],[1,2,3,4]);
//
//    result=mainGame();
//
//    expect(result).toEqual(1);
//   })


})