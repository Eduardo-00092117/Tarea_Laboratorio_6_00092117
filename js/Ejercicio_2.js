class convertor{
    
    constructor(){}

    longitud(unidad1, unidad2, medida){
        let ope;
        if(unidad1 == "m" && unidad2 == "cm"){
            ope = medida*100;
        } else if(unidad1 == "cm" && unidad2 == "m"){
            ope = medida/100;
        } else if(unidad1 == "km" && unidad2 == "m"){
            ope = medida*1000;
        } else if(unidad1 == "m" && unidad2 == "km"){
            ope = medida/1000;
        } else if(unidad1 == "ft" && unidad2 == "m"){
            ope = medida*0.3048;
        } else if(unidad1 == "m" && unidad2 == "ft"){
            ope = medida/0.3048;
        } 
        return ope;
    }

    temperatura(unidad1, unidad2, medida){
        let ope;
        if(unidad1 == "c" && unidad2 == "f"){
            ope = (medida*1.8)+32; 
        } else if(unidad1 == "f" && unidad2 == "c"){
            ope = (medida-32)/1.8; /** */
        } else if(unidad1 == "k" && unidad2 == "f"){
            ope = (medida-273.15)*1.8 + 32; 
        } else if(unidad1 == "f" && unidad2 == "k"){
            ope = (medida-32)/1.8 + 273.15; /** */
        } else if(unidad1 == "k" && unidad2 == "c"){
            ope = medida-273.15; 
        } else if(unidad1 == "c" && unidad2 == "k"){
            ope = medida+273.15; 
        } 
        return ope;
    }

    convertir(medida, unidadInicial, unidadConvertir, tipoMedida){
        switch(tipoMedida){
            case 'L':
                var long = new convertor();
                console.log(long.longitud(unidadInicial, unidadConvertir, medida) + " " + unidadConvertir);
                break;
            case 'T':
                var long = new convertor();
                console.log(long.temperatura(unidadInicial, unidadConvertir, medida) + " " + unidadConvertir);
                break;
            default:
                console.log('Tipo de medida no valida!!!!!!!');
                break;
        }
    } 
    
} 

var convertor2 = new convertor(); 
convertor2.convertir(1, 'c', 'k', 'T');