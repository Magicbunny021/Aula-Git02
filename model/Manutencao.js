import { Servico } from "./Servico.js";

export class Manutencao extends Servico {

    constructor(codigo, cliente, descricao, defeito) {
        super(codigo, cliente, descricao);
        this.defeito = defeito;
    }

    executar() {
        return `O defeito "${this.defeito}" será analisado e reparado`;
    }
}