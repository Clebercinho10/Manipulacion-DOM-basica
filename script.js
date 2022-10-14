//console.log('Hello, World');
/*const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.querySelector('.parrafito');
const pid =document.querySelector('#pid');
const input=document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML="Patito <br> Feo";//este convierte a codigo html
h1.innerText="Patito <br> Feo";//este convierte a texto
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');//cuando queremos borrar y añadir el atributo verde
//h1.classList.contains("verde");//cuando queremos verificar si exite la clase

input.value="456";
const img=document.createElement('img');
img.setAttribute('src','https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg');
console.log(img);
pid.innerHTML="";
pid.append(img);*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado:"+sumaInputs;
}