const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const geraNumero = () => {
  return String.fromCharCode(rand(48, 58))
}

const geraMaiuscula = () => {
  return String.fromCharCode(rand(65, 91))
}

const geraMinuscula = () => {
  return String.fromCharCode(rand(97, 123))
}

const geraSimbolo = () => {
  return String.fromCharCode(rand(33, 47))
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd)

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula())
    minusculas && senhaArray.push(geraMinuscula())
    numeros && senhaArray.push(geraNumero())
    simbolos && senhaArray.push(geraSimbolo())
  }
  return senhaArray.join('').slice(0,qtd);
}



