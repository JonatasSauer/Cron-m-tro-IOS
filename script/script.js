window.onload = function (){
    //Executa um JS imediatamente após o carregamento da página.
    
    var minutes = 00;
    var seconds = 00;
    var tens = 00; 

    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');

    var buttonStart = document.getElementById('button-start');
   
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = ()=>{
        clearInterval(Interval); //Limpa o temporizador definido no método setInterval().
        appendSeconds.style.color = '#2e2e2e';
        appendTens.style.color = '#2e2e2e';
        appendMinutes.style.color = '#2e2e2e';
        Interval = setInterval(()=>{
            tens++; //pós-icremento
            if(tens <= 9){
                appendTens.innerHTML = '0' + tens;
            };

            if(tens > 9){
                appendTens.innerHTML = tens;
                appendTens.style.color = 'darkgreen'
            }

            if(tens > 99){
                console.log('seconds');
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                tens = 0;

                appendTens.innerHTML = "0" + 0; 
                appendSeconds.style.color = 'darkgreen';
            }

            if(seconds > 9){
                appendSeconds.innerHTML = seconds
               
            }

            if(seconds > 58){
                console.log('minutes');
                minutes++;
                appendMinutes.innerHTML = "0" + minutes;
                appendMinutes.style.color = 'darkgreen';
                seconds = 0;
            }

            if(minutes > 9){
                appendMinutes.innerHTML = minutes;
            }

        }, 10); // Chama uma função em intervalo especificado
      }

    buttonStop.onclick = ()=>{
        clearInterval(Interval);
        appendSeconds.style.color = 'darkred';
        appendTens.style.color = 'darkred';
        appendMinutes.style.color = 'darkred';
    }

    buttonReset.onclick = ()=>{ 
        clearInterval(Interval);

        appendSeconds.style.color = '#000';
        appendTens.style.color = '#000';
        appendMinutes.style.color = '#000';

        minutes = "00";
        seconds = "00";
        tens = "00"; 
        
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }


}