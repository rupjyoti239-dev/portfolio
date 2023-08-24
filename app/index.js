const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const clsBtn = document.getElementById('close')

if(bar){
  bar.addEventListener('click', ()=>{
    nav.classList.add("active");
  })
}
if(clsBtn){
  clsBtn.addEventListener("click", ()=>{
    nav.classList.remove('active');
  })
}