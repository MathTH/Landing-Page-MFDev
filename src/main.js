function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 10 * i)

  });
}
const titulo = document.querySelector('.color-line1-h2');
typeWrite(titulo);


function typeWrite(elemento2){
    const textoArray = elemento2.innerHTML.split('');
    elemento2.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento2.innerHTML += letra;
    }, 70 * i)

  });
}
const titulo2 = document.querySelector('.paragrafo');
typeWrite(titulo2);