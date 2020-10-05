(function() {
    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").factory("mensagemFactory", [
        "toastr",
        mensagemFactory
    ]);

    function mensagemFactory(toastr) {

        function adicionarMensagem(mensagemList, titulo, metodo) {
            if(mensagemList instanceof Array) {
                mensagemList.forEach(mensagem => toastr[metodo](mensagem, titulo));
            } else {
                toastr[metodo](mensagemList, titulo);
            }
        };

        function adicionarMensagemSucesso(mensagemList) {
            adicionarMensagem(mensagemList, "Sucesso", "success");
        };

        function adicionarMensagemErro(mensagemList) {
            adicionarMensagem(mensagemList, "Erro", "error");
        };

        return { adicionarMensagemSucesso, adicionarMensagemErro };

    };

})();