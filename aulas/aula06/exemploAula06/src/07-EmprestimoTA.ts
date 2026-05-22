import { Emprestimo } from "./06-Emprestimo";   

export class EmprestimoTa extends Emprestimo{
    private ta: number;

    constructor(s: number, n: number, j: number, ta: number){
        super(s, n, j);
        this.ta = ta;
    }

    public getTa(): number{
        return this.ta;
    }
    public proximaParcela(): number {
        let pp = super.proximaParcela();
        if (pp > 0){
            pp+=this.ta;
        }
        return pp;
    }
}