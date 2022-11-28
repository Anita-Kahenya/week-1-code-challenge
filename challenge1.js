// function to output the expected grade based on marks 
function gradeGenerator (marks){

    if (marks >79) {
        console.log ("A")
    } else if (marks <=79 && marks >60){
        console.log ("B")
    } else if (marks <=59 && marks >49){
        console.log ("C")
    }else if (marks <=49 && marks>40){
        console.log ("D")
    } else {
        console.log ("E")
    }
}

//user prompt to enter marks 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter marks ',marks => {
    gradeGenerator(marks)
    readline.close();
  })