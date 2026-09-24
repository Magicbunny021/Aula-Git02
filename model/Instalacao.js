import { Servico } from "./Servico.js";

export class Instalacao extends Servico {

    constructor(codigo, cliente, descricao, equipamento) {
        super(codigo, cliente, descricao);
        this.equipamento = equipamento;
    }

    executar() {
        return `O equipamento ${this.equipamento} será instalado`;
    }
}