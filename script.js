const tdash=document.getElementById("tdash")
const navElements=document.querySelectorAll('.navA')
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