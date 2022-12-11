let speed=document.getElementById("speed")
let calculatedPoints=document.getElementById("calc-demerit")
let demeritPoints=document.getElementById("demerit-points")

// function to calculate the demerit points and the expected output
function speedDetector(speed){
    if (speed<70) {
        demeritPoints.textContent = "Ok"        
    }else {
        const point=Math.floor((speed-70)/5) 
        if (point<12) {
            demeritPoints.textContent= `points:   ${point}`
        }
        else {
            demeritPoints.textContent= "License suspended"
        }
    }
}



calculatedPoints.addEventListener("click", (event)=>{
    speedDetector(speed.value)
})
