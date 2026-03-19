let numero1 = 0;
let numero2 = 0;
let resultado;

const visor = document.getElementById('visor');

const bt0 = document.getElementById('bt0');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');

const btSomar = document.getElementById('bt-somar');
const btSubtrair = document.getElementById('bt-subtrair');
const btMultiplicar = document.getElementById('bt-multiplicar');
const btDividir = document.getElementById('bt-dividir');
const btIgual = document.getElementById('bt-igual');
const btCancelar = document.getElementById('bt-cancelar');

visor.value = '0';

bt0.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '0';        
    }else{
        visor.value = visor.value + '0';
    }
    
});

bt1.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '1';        
    }else{
        visor.value = visor.value + '1';
    }
    
});

bt2.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '2';        
    }else{
        visor.value = visor.value + '2';
    }
    
});

bt3.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '3';        
    }else{
        visor.value = visor.value + '3';
    }
    
});

bt4.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '4';        
    }else{
        visor.value = visor.value + '4';
    }
    
});

bt5.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '5';        
    }else{
        visor.value = visor.value + '5';
    }
    
});

bt6.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '6';        
    }else{
        visor.value = visor.value + '6';
    }
    
});

bt7.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '7';        
    }else{
        visor.value = visor.value + '7';
    }
    
});

bt8.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '8';        
    }else{
        visor.value = visor.value + '8';
    }
    
});

bt9.addEventListener("click", function(){
    if(visor.value == '0'){
        visor.value = '9';        
    }else{
        visor.value = visor.value + '9';
    }
    
});

btCancelar.addEventListener("click", function(){
    visor.value = '0';
});

btSomar.addEventListener("click", function(){
    numero1 = Number(visor.value);
    operacao = 1;
    visor.value = '0';
});

btSubtrair.addEventListener("click", function(){
    numero1 = Number(visor.value);
    operacao = 2;
    visor.value = '0';
});

btMultiplicar.addEventListener("click", function(){
    numero1 = Number(visor.value);
    operacao = 3;
    visor.value = '0';
});

btDividir.addEventListener("click", function(){
    numero1 = Number(visor.value);
    operacao = 4;
    visor.value = '0';
});

btIgual.addEventListener("click", function(){
    numero2 = Number(visor.value);
    switch(operacao){
        case 1:
            resultado = somar(numero1,numero2);
            break;
        case 2:
            resultado = subtrair(numero1,numero2);
            break;
        case 3:
            resultado = multiplicar(numero1,numero2);
            break;
        case 4:
            resultado = dividir(numero1,numero2);
            break;
    }
    visor.value = resultado;
    
});


function somar(numero1, numero2){
    return numero1 + numero2;
}

function subtrair(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    if(numero2 == 0) return 0;
    return numero1 / numero2;
}


