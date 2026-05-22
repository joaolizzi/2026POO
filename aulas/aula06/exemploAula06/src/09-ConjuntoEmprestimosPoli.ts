import { Emprestimo } from "./06-Emprestimo"; 
import { EmprestimoTa } from "./07-EmprestimoTA";
import { ConjuntoEmprestimos } from "./08-ConjuntoEmprestimos";

export class ConjuntoEmprestimosPoli {
    public static main(): void{
        const ce = new ConjuntoEmprestimos(3);
        ce.adicionaEmprestimo(new Emprestimo(1000, 5, 10));
        ce.adicionaEmprestimo(new EmprestimoTa(2000, 10, 5, 50));
        ce.adicionaEmprestimo(new Emprestimo(500, 3, 20));
        
        let status: boolean;
        do {
            status = ce.proximaParcelas();
        } while (status);
    }
}
ConjuntoEmprestimosPoli.main();
