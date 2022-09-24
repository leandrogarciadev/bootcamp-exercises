// Calculando Raio
let raio = parseFloat(gets());
const PI = 3.14159;

let volumeEsfera = (4/3) * PI * Math.pow(raio,3);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)


print("VOLUME = " +volumeEsfera.toFixed(3)); // fixar 3 casas decimais após virgula