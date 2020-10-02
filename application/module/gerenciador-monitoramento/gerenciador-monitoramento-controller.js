(function () {

    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").controller("monitoramentoController", [
        "$http",
        monitoramentoController
    ]);

    function monitoramentoController($http) {
        const vm = this;
        vm.resumoFaturamento = function () {
            const URL_PLGFIN_API = "http://localhost:9090/api/resumo-faturamento";
            $http.get(URL_PLGFIN_API).then(function (response) {
                vm.total_credito = response.data.id_credito;
                vm.total_debito = response.data.id_debito;
                vm.total_geral = vm.total_credito - vm.total_debito;
            });
        };
        vm.resumoFaturamento();
    }

})();