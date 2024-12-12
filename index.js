const prompt = require('prompt-sync')({ sigint: true });

// Entrada: Nome e quantidade de experiência (XP) do herói
let nome = prompt("Digite o nome do herói: "); // Exemplo: "Superman"
let xp = parseInt(prompt("Digite a quantidade de XP do herói: ")); // Exemplo: 1000

// Variável para armazenar o nível do herói
let nivel;

// Verificação da experiência e classificação do herói
if (xp < 999) {
    nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibição da mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
