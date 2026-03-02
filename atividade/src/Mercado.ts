import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("Bem vindo(a) ao Mercado!");

let opcao = 0
let lista: string[] = [];

while (opcao !==4){

console.log(`\nEscolha uma das opções abaixo:`);
console.log(`Opção 1 = Adicionar item a lista:`);
console.log(`Opção 2 = Remover item da lista:`);
console.log(`Opção 3 = Mostrar lista final:`);
console.log(`Opção 0 = Sair:`);

opcao = Number(prompt("Digite a opção desejada:"));

if (opcao === 1) {

    const item: string = prompt("Digite o item que deseja adicionar a lista:");
    lista.push(item);
    console.log(`Você adicionou ${item} em sua lista`);

} else if (opcao === 2) {
    console.log(`Esses são os itens que você tem em sua lista até o momento: ${lista}`);
    const itemremover: string = prompt("Digite o item que deseja remover da lista:");
    const indice = lista.indexOf(itemremover);

    if (indice !== -1) {
        lista.splice(indice, 1);
        console.log(`Item removido!`);
    } else {
        console.log(`Item não encontrado na lista`);
    }

} else if (opcao === 3) {
    console.log(`Esses são os itens presentes em sua lista atualmente: ${lista}`);

} else if (opcao === 0) {
    console.log(`Você saiu do Mercado, até a próxima!`);

} else {
    console.log(`Opção inválida! Tente novamente`);
}
}
