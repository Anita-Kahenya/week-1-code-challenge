let gross=document.getElementById("salary")
let calculatedNet=document.getElementById("calc-net")
let net=document.getElementById("net-salary")



function netSalaryCalculator(gross){
    let paye
    let nhif
    let nssf
    let netSalary 

    //calculating paye
    if (gross<=24000 ) {
        paye=0.1*gross
    }else if (gross>24000 && gross <=32,333){
        paye=0.25*gross
    }else {
        paye=0.3*gross
    }
    console.log ("The PAYE is: " + paye)

    //calculating nhif
    if (gross<=5999){
        nhif=150
    }else if (gross>=6000 && gross <=7999){
        nhif=300
    }else if (gross>=8000 && gross <=11999){
        nhif=400
    }else if (gross>=12000 && gross <=14999){
        nhif=500
    }else if (gross>=15000 && gross <=19999){
        nhif=600
    }else if (gross>=20000 && gross <=24999){
        nhif=750
    }else if (gross>=25000 && gross <=29999){
        nhif=850
    }else if (gross>=30000 && gross <=34999){
        nhif=900
    }else if (gross>=35000 && gross <=39999){
        nhif=950
    }else if (gross>=40000 && gross <=44999){
        nhif=1000
    }else if (gross>=45000 && gross <=49999){
        nhif=1100
    }else if (gross>=50000 && gross <=59999){
        nhif=1200
    }else if (gross>=60000 && gross <=69999){
        nhif=1300
    }else if (gross>=70000 && gross <=79999){
        nhif=1400
    }else if (gross>=80000 && gross <=89999){
        nhif=1500
    }else if (gross>=90000 && gross <=99999){
        nhif=1600
    }else {
        nhif=1700
    } 
console.log("NHIF is : " + nhif)
//calculating nssf
    if (gross<=6000){
        console.log ("Tier 1")
    }else if (gross>=6001 && gross <=18000){
        console.log ("Tier 2")
    }
    netSalary=gross-(nhif+paye)
    net.textContent =`The net salary is :  ${netSalary}`
}

calculatedNet.addEventListener("click", (event)=>{
    netSalaryCalculator(gross.value)
    console.log(gross.value)
})






