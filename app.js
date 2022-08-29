// https://www.omnicalculator.com/math/midpoint#midpoint-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const midpointRadio = document.getElementById('midpointRadio');
const firstpointRadio = document.getElementById('firstpointRadio');
const secondpointRadio = document.getElementById('secondpointRadio');

let x;
let y;
let x1 = v1;
let y1 = v2;
let x2 = v3;
let y2 = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

midpointRadio.addEventListener('click', function() {
  variable1.textContent = 'x1';
  variable2.textContent = 'y1';
  variable3.textContent = 'x2';
  variable4.textContent = 'y2';
  x1 = v1;
  y1 = v2;
  x2 = v3;
  y2 = v4;
  result.textContent = '';
});

firstpointRadio.addEventListener('click', function() {
  variable1.textContent = 'x';
  variable2.textContent = 'y';
  variable3.textContent = 'x2';
  variable4.textContent = 'y2';
  x = v1;
  y = v2;
  x2 = v3;
  y2 = v4;
  result.textContent = '';
});

secondpointRadio.addEventListener('click', function() {
  variable1.textContent = 'x1';
  variable2.textContent = 'y1';
  variable3.textContent = 'x';
  variable4.textContent = 'y';
  x1 = v1;
  y1 = v2;
  x = v3;
  y = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(midpointRadio.checked)
    result.textContent = `Mid point = ${computeMidpoint()}`;

  else if(firstpointRadio.checked)
    result.textContent = `First point = ${computeFirstpoint()}`;

  else if(secondpointRadio.checked)
    result.textContent = `Second point = ${computeSecondpoint()}`;
})

// calculation

function computeMidpoint() {
  let first = (Number(x1.value) + Number(x2.value)) / 2;
  let second = (Number(y1.value) + Number(y2.value)) / 2;
  return `(${first},${second})`;
}

function computeFirstpoint() {
  let first = (Number(x.value) * 2) - Number(x2.value);
  let second = (Number(y.value) * 2) - Number(y2.value);
  return `(${first},${second})`;
}

function computeSecondpoint() {
  let first = (Number(x.value) * 2) - Number(x1.value);
  let second = (Number(y.value) * 2) - Number(y1.value);
  return `(${first},${second})`;
}