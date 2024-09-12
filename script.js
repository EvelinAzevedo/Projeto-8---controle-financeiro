//Escreva um programa em javascript que comece a perguntar pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
let money = parseInt(prompt("Quanto de dinheiro ha disponivel?"))
let option = parseInt(prompt(` Você tem ${money}R$\n opção 1:Adicionar\n opção 2:Remover\n opção 3:Encerrar`))
while (option !== 3) {
  switch (option) {
    case 1:
      let add = parseInt(prompt('Quanto você quer adicionar?'))
      money += add
      break
    case 2:
      let minus = parseInt(prompt('Quanto você quer remover?'))
      money -= minus
      break
    default:
      alert('Opção Invalida')   
  }
  option = parseInt(prompt(` Você tem ${money}R$\n opção 1:Adicionar\n opção 2:Remover\n opção 3:Encerrar`))
}
