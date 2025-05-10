var radio = document.querySelector('.manual-btn');
var cont = 1;

function proximaImg(){
        cont++;

        if(cont > 4){
            cont = 2;
        }

        document.getElementById('radio' + cont).checked =  true;

}


