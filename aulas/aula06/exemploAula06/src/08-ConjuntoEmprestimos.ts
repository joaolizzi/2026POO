import { Emprestimo } from "./06-Emprestimo";
import { EmprestimoTa } from "./07-EmprestimoTA";

export class ConjuntoEmprestimos {
    private vEmprestimos: Emprestimo[];
    private corrente: number = -1;

    constructor(quantidade: number){
        this.vEmprestimos = new Array<Emprestimo>(quantidade);
    }

    public adicionaEmprestimo(emp: Emprestimo): boolean{
        let resultado= false;
        if(this.corrente +1 < this.vEmprestimos.length){
            this.corrente++;
            this.vEmprestimos[this.corrente] = emp;
            resultado = true;
        } 
        return resultado;

    }
    public proximaParcelas(): boolean {
        let status = false;
        for (let e= 0; e< this.vEmprestimos.length; e++){
            const p = this.vEmprestimos[e].proximaParcela();
            if (p > 0){
                status = true;
                const tipo = this.vEmprestimos[e] instanceof EmprestimoTa ? "TA" : "Simples";
                console.log(`Parcela do emprestimo ${e} (${tipo}): ${p}`);
            }
        }
        return status;
    }

}