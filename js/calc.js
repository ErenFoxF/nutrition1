
const kg = document.querySelector(".inputKg");
const age = document.querySelector(".inputAge");
const gender = document.querySelectorAll(".gender");
const dropdowns = document.querySelectorAll(".dropdown");
const height = document.querySelector(".inputHeight")
const goal = document.querySelectorAll(".goal")

let setGender = "";
let setKg =""; 
let setAge = "";
let setHeight = "";
let setKcalBasic = "";
let setCoeff = "";
let setBMI = "";
let setProtein = "";
let setCarbs = "";
let setFats = "";
let setGoal = "";
let kcalForGoal = "";

for (let i = 0; i < gender.length; i++) {
    gender[i].addEventListener("click", (event)=>{
        if(event.target.classList.contains("male")){
            setGender = "male"
        } else{
            setGender = "female";
        }
    } );
}
kg.addEventListener("keyup", ()=>{
    setKg = kg.value
})
age.addEventListener("keyup", ()=>{
    setAge = age.value;
})
height.addEventListener("keyup", ()=>{
    setHeight = height.value
})
dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", ()=>{
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");
    });
    console.log(options)
    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            selected.innerText = option.innerText;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");

            menu.classList.remove("menu-open");
            options.forEach(option =>{
                option.classList.remove("active");
            })
            option.classList.add("active");
            setCoeff = option.id;
        });
    });
});
function calcKcalBasic () {
   let subTotal = setKg*10 + setHeight*6.25 - setAge*5;
   if(setGender === "male"){
    setKcalBasic = (subTotal + 5).toFixed(0);
   } else if(setGender === "female"){
    setKcalBasic = subTotal -161
   } else{
    setKcalBasic = 0;
   }
   setBMI = (setKg/((setHeight/100)*(setHeight/100))).toFixed(1);
//    localStorage.setItem("BMI", setBMI)
   calcWithCoeff();
     calcWithGoal();
     calcPCF();
     displayResults();
 
}
 function calcWithCoeff (){
    switch(setCoeff){
    case "1": setKcalBasic = (setKcalBasic*1.2).toFixed(0);
    break;
    case "2":  setKcalBasic = (setKcalBasic*1.38).toFixed(0);
    break;
    case "3":  setKcalBasic = (setKcalBasic*1.46).toFixed(0);
    break;
    case "4":  setKcalBasic = (setKcalBasic*1.55).toFixed(0);
    break;
    case "5":  setKcalBasic = (setKcalBasic*1.64).toFixed(0);
    break;
    case "6":  setKcalBasic = (setKcalBasic*1.73).toFixed(0);
    break;
    case "7":  setKcalBasic = (setKcalBasic*1.9).toFixed(0);
    }
    // localStorage.setItem("kcalBasic", setKcalBasic)
 }
 for (let i = 0; i < goal.length; i++) {
    goal[i].addEventListener("click", (event)=>{
        if(event.target.classList.contains("lose")){
            setGoal = "lose"
        } else if (event.target.classList.contains("same")){
            setGoal = "same";
        } else if(event.target.classList.contains("gain")){
            setGoal = "gain";
        }
    } );
}
 function calcWithGoal(){
    if(setGoal === "lose"){
        kcalForGoal = (setKcalBasic - setKcalBasic*0.13).toFixed(0)
    } else if (setGoal === "same"){
        kcalForGoal = setKcalBasic;
    }
    else if (setGoal === "gain" ){
        kcalForGoal = (Number(setKcalBasic) + setKcalBasic*0.13).toFixed(0)
    };
    // localStorage.setItem("kcalForGoal", kcalForGoal)
 }
  function calcPCF(){
    setProtein = kcalForGoal*0.25;
    // localStorage.setItem("Protein",kcalForGoal*0.25)
    // localStorage.setItem("Carbs",kcalForGoal*0.4)
    // localStorage.setItem("Fats",kcalForGoal*0.35)
    setCarbs  = kcalForGoal*0.4;
    setFats = kcalForGoal*0.35;
 }
 function displayResults(){
    document.querySelector(".results").innerHTML = `<p>Basic Kcal: ${setKcalBasic} </p> 
    <p> Kcal for your goal: ${kcalForGoal}</p>
    <p>BMI: ${setBMI} </p>
    <p>Protein (kcal): ${setProtein.toFixed(0)} </p>
    <p>Protein (gram): ${(setProtein/4).toFixed(0)} </p>
    <p>Carbs (kcal): ${setCarbs.toFixed(0)} </p>
    <p>Carbs (gram): ${(setCarbs/4).toFixed(0)} </p>
    <p>Fats (kcal): ${setFats.toFixed(0)} </p> 
    <p>Fats (gram): ${(setFats/9).toFixed(0)} </p> `; 
 }

 const modal = document.querySelector(".email");
 const contmodal = document.getElementById("one")

 const modalclose = document.querySelector(".x-touch");
 function openMod(){
    calcKcalBasic();
    document.querySelector(".results").innerHTML = `<p>Basic Kcal: ${setKcalBasic} </p> 
    <p> Kcal for your goal: ${kcalForGoal}</p>
    <p>BMI: ${setBMI} </p>
    <p>Protein (kcal): ${setProtein.toFixed(0)} </p>
    <p>Protein (gram): ${(setProtein/4).toFixed(0)} </p>
    <p>Carbs (kcal): ${setCarbs.toFixed(0)} </p>
    <p>Carbs (gram): ${(setCarbs/4).toFixed(0)} </p>
    <p>Fats (kcal): ${setFats.toFixed(0)} </p> 
    <p>Fats (gram): ${(setFats/9).toFixed(0)} </p> `; 
    // document.querySelector(".results").innerHTML = "Basic Kcal: ";
    // `<p>Basic Kcal:dfnslvei </p>`
    // console.log(document.querySelector(".results").innerHTML)
    modal.classList.add("expand")
    contmodal.style.zIndex = "2";
    

    
 }
function closeModal (){
document.querySelector('.email').classList.remove('expand');
contmodal.style.zIndex = "-1";
}
 