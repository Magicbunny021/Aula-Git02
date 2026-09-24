import { Servico } from "./Servico.js";

export class Vistoria extends Servico {

    constructor(codigo, cliente, descricao, local) {
        super(codigo, cliente, descricao);
        this.local = local;
    }

    executar() {
        return `A inspeção será realizada em ${this.local}`;
    }
}