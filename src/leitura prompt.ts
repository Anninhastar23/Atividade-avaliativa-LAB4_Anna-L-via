import promptSync from "prompt-sync";

const prompt = promptSync();
const fruta: string = prompt("Digite uma fruta de sua escolha: ");
const quantidade: string = prompt("Digite a quantidade de fruta necessária:");

console.log (`Você adicionou ${quantidade} da fruta ${fruta} em sua lista. Deseja acrescentar algo a mais?`)