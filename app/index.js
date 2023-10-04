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



// filter
(
  ()=>{
const buttons = document.querySelectorAll('.btn-tab');
const storeData = document.querySelectorAll('.card');
buttons.forEach((button)=>{


    button.addEventListener('click', (e)=>{
      e.preventDefault();
      const filter = e.target.dataset.filter;


      
    storeData.forEach((item)=>{
      if(filter === "all"){
        item.style.display = "block"
      }
      else{
        if(item.classList.contains(filter)){
          item.style.display = "block"
        }
        else{
          item.style.display = "none"
        }
      }


    })





    })
   })

  }
)()