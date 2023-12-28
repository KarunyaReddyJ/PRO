const tdash=document.getElementById("tdash")
const navElements=document.querySelectorAll('.navA')
const year=document.getElementById('year')
const currentDate=new Date();
let disp="none"
tdash.addEventListener('click',()=>{
    if(disp==="block")
        disp="none"
    else
        disp="block"
    navElements.forEach(element => {
        element.style.display=disp
    });
    console.log("clicked")
})
year.innerText=currentDate.getFullYear();