const pedirAumento = new Promise ((resolve,reject)=>{
    const tiempo =10;
    if(tiempo >=10){
        resolve('ya tiene el tiempo para pedir un aumento de sueldo');
    }else{
        reject('todavia no puedo pedir un aumento no tengo l antiguedad');
    }
})

perdirAumento
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })