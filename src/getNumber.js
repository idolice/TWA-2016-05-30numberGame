


    var getNumbers=function(){
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
       // return [1,2,3,4];
    rl.on('line', (answer) => {
      var inputAnswer=answer.toString();
      var userNumber=inputAnswer.split(' ');
      return userNumber;
       });
    };



module.exports={getNumbers:getNumbers};