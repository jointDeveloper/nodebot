 var five = require('johnny-five')  
       var board = new five.Board()  
       board.on('ready', function () {  
       
         // Your solution here!
        var motor= new five.Motor(9);
        motor.start(200);
        //board.loop(1000, function() {
            board.wait(2000, function() {
                motor.stop();
                board.wait(1000, function() {
                    motor.start(200);
                });
            });
            
            
        //});
       })  
