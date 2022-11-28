// function to calculate the demerit points and the expected output
function speedDetector(speed){
    if (speed<70) {
        console.log ("Ok")
        
    }else {
        const point=Math.floor((speed-70)/5) 
        if (point<12) {
            console.log ("points: " + point)
        }
        else {
            console.log ("License suspended")
        }
    }
}

//user prompt to enter speed 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter speed ',speed => {
    speedDetector(speed)
    readline.close();
  })