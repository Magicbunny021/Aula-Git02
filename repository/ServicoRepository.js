const servicos = [];

export function cadastrarServico(servico) {
    servicos.push(servico);
}

export function listarServico() {
    return servicos;
}

export function buscarPorIndice(indice) {
    return servicos[indice];
}

export function atualizarServico(indice, servico) {
    servicos[indice] = servico;
}

export function deletarServico(indice) {
    servicos.splice(indice, 1);
}