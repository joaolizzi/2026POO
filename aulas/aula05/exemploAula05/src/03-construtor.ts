class Aluno {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public apresentar(): void {
    console.log(`Aluno: ${this.nome} | Idade: ${this.idade}`);
  }
}

const aluno = new Aluno("Igor", 6);
aluno.apresentar();
