function showSVG(id){
   const btnHideClassList= document.querySelector(".btn__hide").classList
   btnHideClassList.remove("btn-primary")
   btnHideClassList.add("btn-outline-secondary")
const btnShowClassList= document.querySelector(".btn__show").classList
btnShowClassList.remove("btn-outline-secondary")
   btnShowClassList.add("btn-primary")
const elements = document.querySelectorAll(id)
elements.forEach((el) => {el.style.display=""})
}
function hideSVG(id){
    const btnHideClassList= document.querySelector(".btn__hide").classList
    btnHideClassList.add("btn-primary")
    btnHideClassList.remove("btn-outline-secondary")
 const btnShowClassList= document.querySelector(".btn__show").classList
 btnShowClassList.add("btn-outline-secondary")
    btnShowClassList.remove("btn-primary")
    const elements = document.querySelectorAll(id)
    elements.forEach((el) => {el.style.display="none"})
    }
    document.addEventListener('DOMContentLoaded', function(){
        hideSVG("#svg_element")
        
    });