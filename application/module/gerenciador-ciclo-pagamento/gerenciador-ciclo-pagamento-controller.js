(function() {

    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").controller("cicloPagamentoController", [
        "$http",
        "mensagemFactory",
        cicloPagamentoController
    ]);

    function cicloPagamentoController($http, mensagemFactory) {

        const vm = this;

        vm.cicloPagamentoList = [];

        const URL_PLGFIN_API = "http://localhost:9090/api/ciclo-pagamento";

        function initializer() {
            vm.refresh();
        };

        vm.save = function(cicloPagamentoModel) {
            $http.post(URL_PLGFIN_API, cicloPagamentoModel).then(function(response) {
                vm.cicloPagamentoModel = {};
                cicloPagamento.cicloPagamentoModel = {};
                mensagemFactory.adicionarMensagemSucesso("Operação realizada com Sucesso!");
            }).catch(function (response) {
                mensagemFactory.adicionarMensagemErro(response.data);
            });
        };

        vm.refresh = function() {
            $http.get(URL_PLGFIN_API).then(function(response) {
                vm.cicloPagamentoList = response.data;
                console.log(vm.cicloPagamentoModel);
            });
        };

        initializer();

    };

})();