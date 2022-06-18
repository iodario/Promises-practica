// creacion de promesas
// ejemplo de promesa resuelta


let promesa1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Promesa resuelta que bien!')
    }, 250);

    setTimeout( () => {
        reject('Promesa rechazada que mal!');
    }, 350);

});

promesa1
.then((sucessMessage)=>{
    console.log("respuesta de promesa 1: " + sucessMessage);
})
.catch((errorMessage)=>{
    console.log("error de promesa 1: " + errorMessage);

})

//las promesas pueden tener un solo estado, una vez que se da un estado, no se ejecuta el otro.
//si le cambio los milisegundos, los invierto, me dara 'rejected'

//---------------------------------------------------------------
//ejemplo de promesa pendiente que termina resolviendose
let promesa2 = new Promise( (resolve, reject) => {
    console.log('pensando, aguarde la ejecucion...');
    setTimeout( () => {
        (true)? resolve('Promesa resuelta que bien!') : reject('Promesa rechazada que mal!');
    }, 3500);
});

promesa2.then((sucessMessage)=>{
    console.log("respuesta de promesa 2: " + sucessMessage);
    }).catch((errorMessage)=>{
        console.log("error de promesa 2: " + errorMessage);
    });
    
//---------------------------------------------------------------
//ejemplo de promesa pendiente que termina rechazandose
let promesa3 = new Promise( (resolve, reject) => {
    console.log('pensando, aguarde la ejecucion...');
    setTimeout( () => {
        (false)? resolve('Promesa resuelta que bien!') : reject('Promesa rechazada que mal!');
    }, 3500);
});

promesa3.then((sucessMessage)=>{
    console.log("respuesta de promesa 3: " + sucessMessage);
    }).catch((errorMessage)=>{
        console.log("error de promesa 3: " + errorMessage);
    });
    

//---------------------------------------------------------------
//Ejemplo empleando datos de una Api
//https://dog.ceo/dog-api/


let data = [
    {"message":"https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_4879.jpg","status":"success"},
    {"message":"https:\/\/images.dog.ceo\/breeds\/rottweiler\/n02106550_4150.jpg","status":"success"},
    {"message":"https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_4819.jpg","status":"success"},
    {"message": "https\:\/\/images.dog.ceo\/breeds\/pug\/lupita_and_cats.jpg","status": "success"}
]

console.log(data.length);


//paso 1- creamos una funcion que haga una promesa
const getDogImg = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let random_number = Math.floor(Math.random() * 6);
            console.log('el numero random es: ' + random_number);

            if(random_number < data.length){
                resolve(data[random_number]);
            }else{
                reject('No hay imagenes disponibles');
            }
        }, 3500);
     
})};

let imgCtn = document.getElementById("imgCtn");
getDogImg().then(data => {
    
    let dogImg = document.createElement("img");
    dogImg.setAttribute('src', data.message);
    dogImg.style.width = '300px';
    imgCtn.appendChild(dogImg);
    
}).catch(error => {
    console.log('error al cargar la imagen bola',error);

})


//---------------------------------------------------------------















