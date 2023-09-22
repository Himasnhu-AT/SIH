let btn=document.getElementById("info-btn");
let personal=document.getElementsByClassName("personal")[0];
let personal_edit=document.getElementsByClassName("personal-edit")[0];
let sub=document.getElementById("Submit");
btn.addEventListener("click",()=>{
        personal.style.display="none";
        personal_edit.style.display="block";
        btn.style.display="none";
        sub.style.display="inline";
})
sub.addEventListener("click",()=>{
    personal.style.display="block";
    personal_edit.style.display="none";
    btn.style.display="inline";
    sub.style.display="none";
})
