// Import dependencies
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

// Defining the serial port
// const port = new SerialPort({ path: '/dev/example', baudRate: 9600 });
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });

// The Serial port parser
const parser = new ReadlineParser();
port.pipe(parser);

// Read the data from the serial port
parser.on("data", (line) => setInterval(function () {
    /* your code here */
    console.log(line)
}, 5000));

// var five = require('johnny-five')
//     , board = new five.Board()

// board.on("ready", function () {
//     var inches = 0, centimeters = 0

//     console.log('MKR1000 is now ready!')

//     var prox = new five.Proximity({
//         controller: "HCSR04",
//         pin: "D2"
//     })

//     prox.on("change", function () {
//         if (Math.abs(centimeters - this.cm) > 10) {
//             logDistance(this.cm, this.in)
//             //update new values
//             centimeters = this.cm
//             inches = this.in
//         }
//     })
// })

// function logDistance(centimeters, inches) {
//     console.log("Proximity: ")
//     console.log("  cm  : ", centimeters)
//     console.log("  in  : ", inches)
//     console.log("-----------------")
// }