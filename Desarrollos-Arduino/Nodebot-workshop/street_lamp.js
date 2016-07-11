var five = require('johnny-five')  
       var board = new five.Board()  
       board.on('ready', function () {  
       
         // Your solution here!
         var photoresistor = new five.Sensor({
						pin: "A0", 
						freq: 250
					});
         var led = new five.Led(9);
         
         
       photoresistor.on("data", function() {
			if ( this.value > 600){
				led.on();
			} else {
				led.off();
			}
			});
           
     })
