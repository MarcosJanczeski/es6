class Pessoas {
  constructor(nome, ano) {
    this.nome = !nome ? 'nome indefinido' : nome;
    this.ano = !ano ? 'ano não informado' : ano;
  }
/*
  get nome() {
    return this.nome_;
  }

  set nome(nome) {
    this.nome_ = !nome ? 'nome indefinido' : nome;
  }

  get ano() {
    return this.ano_;
  }

  set ano(ano) {
    this.ano_ = !ano ? 'ano não informado' : ano;
  }
*/
  toString() {
    return `${this.nome}, nasceu em ${this.ano}`;
  }
}

const fulano = new Pessoas('Fulano de Tal', 1987);
const cicrano = new Pessoas();
console.log(fulano);
console.log(String(fulano));
console.log(cicrano);
console.log(String(cicrano));
