var five = require('johnny-five'), potentiometer;
       var board = new five.Board()  
       board.on('ready', function () {  
       
         // Your solution here!
         potentiometer = new five.Sensor({
						pin: "A2", 
						freq: 250
					});
         var servo = new five.Servo(9);

         var Fn = {
            debounce: require("lodash.debounce"),
            cloneDeep: require("lodash.clonedeep"),
         };

         
       	 potentiometer.on("data", function() {
            Fn.map = five.Fn.fmap(this.value, 0, 1023, 0, 179);
    		servo.to(Fn.map);
  		});
           
     })
