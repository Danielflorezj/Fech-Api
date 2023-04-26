 const persona = {
     nombre:"tony",
     edad:45,
     clave:"Ironman"
};
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext =({clave,nombre,edad,rango = 'capitan'}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        range:rango,
        latlng:{
            lat:14.1232,
            lng:-12.3232
        }
    }
}

const { range,nombreClave, anios, latlng: {lat,lng} } = useContext( persona );

console.log(range,nombreClave,anios);
console.log(lat,lng);

const personajes = ['goku','vegeta','trunks'];
const [ , , p3] = personajes;
console.log(p3);

const retornarArreglo = () =>{
    return ['ABC,123'];
}
const [letras,numeros] = retornarArreglo();
console.log(letras,numeros);