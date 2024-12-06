function calcular(){
var ano = new Date();
var atual = ano.getFullYear();
var inputAno = document.getElementById('iano');
var res = document.getElementById('res');

if(inputAno.value == 0 || inputAno.value > atual){
    alert('Verifique os dados e tente novamente!')
}else{
   var sex = document.getElementsByName('sexo')
   var idade = atual - inputAno.value; 
   var genero = '';
   var img = document.createElement('img');
   img.setAttribute('id', 'imagem')
   if(sex[0].checked){
    genero = 'Homem'
    if(idade >= 0 && idade < 10){
        // crianca
        img.setAttribute('src', 'images/bebe-homem-img.jpg')
    }else if( idade < 21){
        // jovem
        img.setAttribute('src', 'images/jovem-homem-img.jpg');
    }else if( idade < 50){
        // adulto
        img.setAttribute('src', 'images/adulto-homem-img.jpg')
    }else{
        // idoso
        img.setAttribute('src', 'images/idoso-homem-img.jpg')
    }
   } else if(sex[1].checked){
    genero = 'Mulher'
    if(idade >= 0 && idade < 10){
        // crianca
        img.setAttribute('src', 'images/bebe-mulher-img.jpg')
    }else if( idade < 21){
        // jovem
        img.setAttribute('src', 'images/jovem-mulher-img.jpg')
    }else if( idade < 50){
        // adulto
        img.setAttribute('src', 'images/adulto-mulher-img.jpg')
    }else{
        // idoso
        img.setAttribute('src', 'images/avo-mulher-img.jpg')
    }
   }

   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
   res.appendChild(img)
}


}