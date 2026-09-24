export class Servico {
    #status;
    #tecnico;

    constructor(codigo, cliente, descricao) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.descricao = descricao;
        this.#status = "agendado";
        this.#tecnico = undefined;
    }

    iniciar() {
        this.#status = "em andamento";
    }

    concluir() {
        this.#status = "concluído";
    }

    definirTecnico(tecnico) {
        this.#tecnico = tecnico;
    }

    getStatus() {
        return this.#status;
    }

    getTecnico() {
        return this.#tecnico;
    }

    executar() {
        throw new Error("O método executar deve ser definido");
    }
}