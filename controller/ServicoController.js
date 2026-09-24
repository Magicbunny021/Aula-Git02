import {
    cadastrarServico,
    listarServico,
    buscarPorIndice,
    atualizarServico,
    deletarServico
} from "../repository/servicoRepository.js";
import { Instalacao } from "../model/Instalacao.js";
import { Manutencao } from "../model/Manutencao.js";
import { Vistoria } from "../model/Vistoria.js";

export function cadastrarInstalacao(codigo, cliente, descricao, equipamento) {
    const servico = new Instalacao(codigo, cliente, descricao, equipamento);
    cadastrarServico(servico);
}

export function cadastrarManutencao(codigo, cliente, descricao, defeito) {
    const servico = new Manutencao(codigo, cliente, descricao, defeito);
    cadastrarServico(servico);
}

export function cadastrarVistoria(codigo, cliente, descricao, local) {
    const servico = new Vistoria(codigo, cliente, descricao, local);
    cadastrarServico(servico);
}

export function associarTecnico(indice, tecnico) {
    const servico = buscarPorIndice(indice);
    servico.definirTecnico(tecnico);
}

export function iniciarServico(indice) {
    const servico = buscarPorIndice(indice);
    servico.iniciar();
}

export function concluirServico(indice) {
    const servico = buscarPorIndice(indice);
    servico.concluir();
}

export function atualizarInstalacao(indice, codigo, cliente, descricao, equipamento) {
    const tecnicoAtual = buscarPorIndice(indice).getTecnico();
    const servico = new Instalacao(codigo, cliente, descricao, equipamento);
    servico.definirTecnico(tecnicoAtual);
    atualizarServico(indice, servico);
}

export function atualizarManutencao(indice, codigo, cliente, descricao, defeito) {
    const tecnicoAtual = buscarPorIndice(indice).getTecnico();
    const servico = new Manutencao(codigo, cliente, descricao, defeito);
    servico.definirTecnico(tecnicoAtual);
    atualizarServico(indice, servico);
}

export function atualizarVistoria(indice, codigo, cliente, descricao, local) {
    const tecnicoAtual = buscarPorIndice(indice).getTecnico();
    const servico = new Vistoria(codigo, cliente, descricao, local);
    servico.definirTecnico(tecnicoAtual);
    atualizarServico(indice, servico);
}

export function excluirServico(indice) {
    deletarServico(indice);
}

export function listar() {
    const servicos = listarServico();

    for (let i = 0; i < servicos.length; i++) {
        const servico = servicos[i];
        const tecnico = servico.getTecnico();
        const nomeTecnico = tecnico ? tecnico.nome : "não definido";
        //Meu querido professor, usei IA na linha 73 pois não lembrava e não ficou salvo como verificar se existe ou ñ

        console.log("---------------------");
        console.log(`Indice:     ${i}`);
        console.log(`Codigo:     ${servico.codigo}`);
        console.log(`Cliente:    ${servico.cliente}`);
        console.log(`Descrição:  ${servico.descricao}`);
        console.log(`Status:     ${servico.getStatus()}`);
        console.log(`Técnico:    ${nomeTecnico}`);
        console.log(`Executar:   ${servico.executar()}`);
    }
}