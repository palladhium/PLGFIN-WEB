angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("monitoramento", {
                url: "/monitoramento",
                templateUrl: "/module/gerenciador-monitoramento/gerenciador-monitoramento-view.html"
            })
            .state("ciclo-pagamento", {
                url: "/ciclo-pagamento",
                templateUrl: "/module/gerenciador-ciclo-pagamento/gerenciador-ciclo-pagamento-view.html"
            });
        $urlRouterProvider.otherwise("/monitoramento");
    }
]);