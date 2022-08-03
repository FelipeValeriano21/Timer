var seg = 0;
var min = 0; 
var hrs = 0 ;
var interval;

function iniciar (){

console.log("iniciar")

interval = setInterval(contador, 1000)

}

function reiniciar (){

  clearInterval(interval)
    
}

function parar (){
    
    document.getElementById('horas').innerText = 0;
    document.getElementById('min').innerText = 0;
    document.getElementById('seg').innerText = 0;

        
}

function contador(){

seg = seg + 1; 

document.getElementById('seg').innerText = seg;

if (seg==60){

min = min+1; 
seg = 0; 

document.getElementById('min').innerText = min;

document.getElementById('seg').innerText = seg;

}

if(min==60){

hrs = hrs+1; 
min = 0; 

document.getElementById('horas').innerText = hrs;

document.getElementById('min').innerText = min;


}


}