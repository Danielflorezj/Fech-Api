const URL_API = "data/campers.json";



function loadData(){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            viewHTML(data);
        })
    
}
function viewHTML(myData){
    const divContenedor = documento.querySelector('#contenedor');
    const {id,nombre,edad,ingles} = myData;
    divContenedor.innerHTML=/* html*/ `
    <p>Id : ${id}</p>
    <p>Nombre : ${nombre} </p>
    <p>Edad : ${edad}</p>
    <p>Nivel de Ingles : ${ingles}</p>

    
    
    `
}
console.log(myData);

