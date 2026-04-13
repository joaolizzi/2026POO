class Produto {
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    if (preco >= 0) {
      this.preco = preco;
    }
  }
}

const p = new Produto("Teclado", 150);
console.log(p.getNome());
p.setPreco(200);
console.log(p.getPreco());

class Temperatura {
  private _celsius: number = 0;

  public get celsius(): number {
    return this._celsius;
  }

  public set celsius(valor: number) {
    if (valor >= -273.15) {
      this._celsius = valor;
    }
  }
}

const t = new Temperatura();
t.celsius = 25;
console.log(t.celsius);
