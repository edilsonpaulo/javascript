function carregar(){
    var image = document.getElementById('imagem');
    var msg = document.getElementById('msg');
    var quote = document.getElementById('citacao')
    var agora = new Date();
    var hora = agora.getHours();
    if(hora >= 0 && hora < 12){
        image.src = 'images/manha-img.jpg';
        msg.innerHTML = 'Bom Dia!';
        quote.innerHTML = 'Todo amanhecer traz uma nova chance de criar, aprender e crescer. Hoje é sua oportunidade de ser melhor do que ontem.'
    }else if(hora >= 12 && hora < 18){
        image.src = 'images/tarde-img.jpg';
        msg.innerHTML = 'Boa Tarde!';
        quote.innerHTML = 'No meio do caminho, lembre-se: cada esforço conta. Persista, pois a jornada é tão importante quanto o destino.'
    }else{
        image.src = 'images/noite-img.jpg';
        msg.innerHTML = 'Boa Noite!'
        quote.innerHTML = 'Quando o dia terminar, reflita: cada desafio foi um passo rumo à sua melhor versão. Amanhã, você recomeça ainda mais forte';
    }

}