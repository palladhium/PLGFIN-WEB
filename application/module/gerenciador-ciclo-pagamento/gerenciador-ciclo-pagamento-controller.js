(function() {

    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").controller("cicloPagamentoController", [
        "$http",
        cicloPagamentoController
    ]);

    function cicloPagamentoController($http) {

        const vm = this;

        vm.save = function(cicloPagamentoModel) {

            const URL_PLGFIN_API = "http://localhost:9090/api/ciclo-pagamento";

            $http.post(URL_PLGFIN_API, cicloPagamentoModel).then(function(response) {
                vm.cicloPagamentoModel = {};
                console.log("CASTRADO COM SUCESSO!");
            });

        };
    };

})();