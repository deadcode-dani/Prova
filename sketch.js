
let colorParam;

function setup() {
  createCanvas(400, 400);
  colorParam = getURLParam('colour');
}

function draw() {
  background(220);
  if (colorParam) {
    fill(colorParam);
  } else {
    fill(0); // Nero di default
  }
  ellipse(200, 200, 100, 100);
}

function getURLParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const value = urlParams.get(param);
  
  if (value) {
    // Se il parametro esiste, prova a convertirlo in un valore numerico
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return numericValue;
    } else {
      // Se non è un numero, restituisci il valore come stringa
      return value;
    }
  }
  
  // Se il parametro non esiste, restituisci null
  return null;
}
