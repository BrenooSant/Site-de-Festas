
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript carregado!');

    const menuToggle = document.getElementById('menu-toggle');
    const buttonContainer = document.getElementById('button-container');
  
    if (menuToggle && buttonContainer) {
      menuToggle.addEventListener('click', () => {
        buttonContainer.classList.toggle('show');
        console.log('Menu toggle clicado!');
      });
    } else {
      console.error('Elementos menuToggle ou buttonContainer não encontrados!');
    }
  });
  

let count = 1
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()

}, 6000)




function nextImage(){
    count++;
    if(count>4){
        count = 1
}

document.getElementById("radio"+count).checked = true
}
