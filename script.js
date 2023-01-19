const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');

form.addEventListener('submit', sumarImputValues);

function sumarImputValues(value) {
    //console.log({event});
    event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}



// console.log(input.value)

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })

// h1.innerHTML = 'Patito';
// h1.innerText = 'Patito';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'red');

// h1.classList.add('red');
// h1.classList.remove('green');
// // h1.classList.toggle('green');
// // h1.classList.contains('green');

// input.value = 123;

// const img = document.createElement('img');
// img.setAttribute('src', 'https://www.kotaku.com.au/wp-content/uploads/sites/3/2021/10/05/razer-desktop-keyboard.jpeg?quality=80&resize=1280,720');
// console.log(img);

// //pid.append(img);
// //pid.replaceWith(img);
// pid.replaceChildren(img);