window.onload= e => {
   setInterval(()=>{
    let loader = document.querySelector('.loader')
   // loader.style.display='none'
   })



    //side bar open
    let bar=document.querySelector('.fa-bars')
    sidebar=document.querySelector('.sidebar');
     bar.onclick = e => {
       
        sidebar.style.width='100%'
    }

    //close btn
    let close= document.querySelector('.close')
    close.onclick = e => {
        sidebar.style.width=0
    }
}