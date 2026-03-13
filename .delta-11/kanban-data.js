// KANBAN DATA — Formação Δ-11
// Este arquivo é atualizado pelos agentes junto com o kanban.md
// O painel.html lê este arquivo para exibir o dashboard visual
// FORMATO: não altere a estrutura, apenas o conteúdo dentro dos arrays

window.KANBAN_DATA = {
  projeto: "",
  complexidade: "",
  fase_atual: "Aguardando novo projeto",
  ultima_atualizacao: "",
  agente_atualizador: "",

  // Colunas "a fazer" por agente
  a_fazer: {
    ATLAS: [],
    CRONOS: [],
    FRONT: [],
    PIXEL: [],
    FORM: [],
    BACK: [],
    ENGINE: [],
    VAULT: [],
    SHIELD: [],
    SCOUT: []
  },

  // Tarefas em execução
  fazendo: [],

  // Tarefas aguardando revisão
  revisao: [],

  // Tarefas concluídas
  concluido: [],

  // Tarefas bloqueadas
  bloqueado: []
};
