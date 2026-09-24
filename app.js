import { Tecnico } from "./model/Tecnico.js";
import {
    cadastrarInstalacao,
    cadastrarManutencao,
    cadastrarVistoria,
    associarTecnico,
    listar,
    iniciarServico,
    concluirServico,
    atualizarInstalacao,
    excluirServico
} from "./controller/servicoController.js"; //Ta vermelho mas sa porra funciona então deixa ai
import { buscarPorIndice } from "./repository/servicoRepository.js";


const tecnico1 = new Tecnico("Carlos Souza", "Elétrica");
const tecnico2 = new Tecnico("Marina Alves", "Hidráulica");


cadastrarInstalacao("0", "Consistem1", "PC", "Computador");
cadastrarManutencao("1", "Consistem2", "Som chato", "Ruído");
cadastrarVistoria("2", "Consistem3", "Mensal", "Quartel");


associarTecnico(0, tecnico1);
associarTecnico(2, tecnico1);


associarTecnico(1, tecnico2);

console.log("===================== LISTAGEM INICIAL =====================");
listar();


iniciarServico(0);
concluirServico(1);


atualizarInstalacao(0, "0", "Malwee", "Instalação revisada", "Compressor Industrial");

console.log("================ LISTAGEM APÓS INICIAR/CONCLUIR/ATUALIZAR ================");
listar();
const tecnicoMantido = buscarPorIndice(0).getTecnico();
console.log(`Conferência: técnico ficado no 0 -> ${tecnicoMantido.nome}`);


excluirServico(2);


cadastrarInstalacao("3", "Russia Botões", "Nova instalação", "Botoadora");
associarTecnico(2, tecnico1); 

console.log("===================== LISTAGEM FINAL =====================");
listar();