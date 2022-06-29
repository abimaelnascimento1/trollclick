function mudaPosition(obj){
    obj.style.position='absolute'
    obj.style.top=Math.random()*600+'px'
    obj.style.left=Math.random()*600+'px'
    obj.style.right=Math.random()*600+'px'
}

function win(){
    alert('Você Conseguiu!')
}

function mensagem(){
    var hora = new Date()
    txt=''

    minutos=hora.getMinutes()
    hora1=hora.getHours()

    if (hora1 < 12){
        txt='bom dia'
    }else if(hora1<18){
        txt='boa tarde'
    }else{
        txt='boa noite'
    }
    alert('Olá '+ txt + ' são ' + hora1 + ':' + minutos)

}