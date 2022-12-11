let marks=document.getElementById("grade")
let grade=document.getElementById("show-grade")
let result=document.getElementById("your-grade")
function gradeGenerator (marks){

    if (marks >79) {
        result.textContent="A"
    } else if (marks <=79 && marks >60){
        result.textContent="B"
    } else if (marks <=59 && marks >49){
        result.textContent="C"
    }else if (marks <=49 && marks>40){
        result.textContent="D"
    } else {
        result.textContent="E"
    }
}



grade.addEventListener("click", (event)=>{
    gradeGenerator(marks.value)
   // console.log(marks.value)
})
