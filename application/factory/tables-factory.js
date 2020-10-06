angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").factory("tablesFactory", [ function() {

    function show(proprietario, {
        isTableListar = false,
        isTableCadastrar = false,
        isTableAtualizar = false,
        isTableDeletar = false
    }) {
        proprietario.isTableListar = isTableListar
        proprietario.isTableCadastrar = isTableCadastrar
        proprietario.isTableAtualizar = isTableAtualizar
        proprietario.isTableDeletar = isTableDeletar
    }
 
    return { show };

 }]);
 