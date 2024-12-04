var agora = new Date();
var diaSemana = agora.getDay();

/*
    0 = segunda
    1 = terca
    2 = quarta
    3 = quinta
    4 = sexta
    5 = sabado
    6 = domingo
 */

switch(diaSemana){
    case 0:
        console.log('Domingo');
        break;
        
        case 1:
            console.log('Segunda');
            break;
        
        case 2: 
        console.log('Terca')
        break
    
    case 3:
        console.log('Quarta')
        break
        
        case 4: 
        console.log('Quinta')
        break;
    
    case 5:
        console.log('Sexta');
        break;

    case 6:
        console.log('Sabado')
        break;
    
    default:
        console.log('[ERROR] dia inválido!')

}