let searchForm = document.querySelector(".search-form");
let personDetails = document.querySelector(".person_description");
let experienceDetails = document.querySelector(".experience_details");
let seniorityDetails = document.querySelector(".seniority_details");
let extrasDetails = document.querySelector(".extras_details");
let addSkills = document.querySelector(".skills_list");


// document.querySelector("#search-btn").onclick = () => {
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

document.querySelector("#person-btn").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn1").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn2").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn3").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn4").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn5").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn6").onclick = () => {
    personDetails.classList.toggle('active');
}
document.querySelector("#person-btn7").onclick = () => {
    personDetails.classList.toggle('active');
}



document.querySelector("#experience").onclick=()=>{
    experienceDetails.classList.toggle('active');
}

document.querySelector("#seniority").onclick=()=>{
    seniorityDetails.classList.toggle('active');
}

document.querySelector("#extras").onclick=()=>{
    extrasDetails.classList.toggle('active');
}

document.querySelector("#add_skill").onclick=()=>{
    addSkills.classList.toggle('active');
}