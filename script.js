
console.log("Hola");

let imagenes = ['img/imagen1-jpg.jpg',
'img/imagen2-jpg.jpg', 
'img/imagen3-jpg.jpg', 
'img/imagen4-jpg.jpg',
'img/imagen5-jpg.jpg',
'img/imagen6-jpg.jpg',
'img/imagen7-jpg.jpg',
'img/imagen8-jpg.jpg',
'img/imagen9-jpg.jpg',
'img/imagen10-jpg.jpg',
];

let textos = ['Imagen1', 
'Imagen2', 
'Imagen3', 
'Imagen4',
'Imagen5',
'Imagen6',
'Imagen7',
'Imagen8',
'Imagen9',
'Imagen10',
];

let url = document.getElementById('url');
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
//let texto = document.getElementById('texto');
let primero = 0
posicionCarrusel()

atras.addEventListener('click', function () {
    
    primero -= 1;
    if (primero === - 1){
        primero = imagenes.length -1;
    } 
    imagen.innerHTML = `<img class="img" src="${imagenes[primero]}" alt="imagenes"></img>`
    document.getElementById('texto').innerHTML = textos[primero];
    posicionCarrusel()
})

adelante.addEventListener('click', function () {
    console.log(primero);
    primero += 1;
    if (primero === imagenes.length){
        primero = 0;
    } 
    imagen.innerHTML = `<img class="img" src="${imagenes[primero]}" alt="imagenes">`
    document.getElementById('texto').innerHTML = `<h3>${textos[primero]}</h3>`;
    posicionCarrusel()
})

enviar.addEventListener('click', function () {
    
    let encontrado = 0;
    for(let f = 0 ;f < imagenes.length;f ++){
        if (imagenes[f] === document.getElementById("url").value){
            encontrado = 1;
        } 
    }
    if (encontrado === 0){
        imagenes.push(document.getElementById("url").value);
        textos.push(document.getElementById("textourl").value);
        alert ("Url anadida...")
    }else{
        alert ("Url no anadida porque ya estaba...")
    }
   

    console.log (imagenes);
})

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (let i = 0 ; i <= imagenes.length ; i++) {
        if (i === primero){
            puntos.innerHTML += '<p class="bold">.</p>'
        }
        else {
            puntos.innerHTML += '<p>.</p>'
        }
        
    }
    
}

