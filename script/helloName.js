function helloName(name) {
    alert(`Hello ${name}`);
}

helloName("GDG on Campus Sogang");

const inputText=document.getElementById("helloName");
const helloBtn=document.getElementById("helloBtn");

helloBtn.addEventListener("click",()=>{
    helloName(inputText.value);
});