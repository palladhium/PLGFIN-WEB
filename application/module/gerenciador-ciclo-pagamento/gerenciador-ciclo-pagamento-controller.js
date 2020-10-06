(function() {

    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").controller("cicloPagamentoController", [
        "$http",
        "mensagemFactory",
        "tablesFactory",
        cicloPagamentoController
    ]);

    function cicloPagamentoController($http, mensagemFactory, tablesFactory) {

        const vm = this;

        vm.cicloPagamentoList = [];

        const URL_PLGFIN_API = "http://localhost:9090/api/ciclo-pagamento/";

        function initializer() {
            vm.refresh();
        };

        vm.save = function(cicloPagamentoModel) {
            $http.post(URL_PLGFIN_API, cicloPagamentoModel).then(function(response) {
                vm.cicloPagamentoModel = {};
                vm.refresh();
                mensagemFactory.adicionarMensagemSucesso("Operação realizada com Sucesso!");
            }).catch(function (response) {
                mensagemFactory.adicionarMensagemErro(response.data);
                console.log(response.data);
            });
        };

        vm.atualizarCicloPagamento = function(cicloPagamentoModel) {
            console.log("atualizarCicloPagamento.....");
            $http.put(`${URL_PLGFIN_API}${cicloPagamentoModel._id}`).then(function(response) {
                mensagemFactory.adicionarMensagemSucesso("Operação realizada com Sucesso!");
                vm.refresh();
            }).catch(function (response) {
                mensagemFactory.adicionarMensagemErro(response.data);
            });
        };

        vm.removerCicloPagamento = function(cicloPagamentoModel) {
            $http.delete(`${URL_PLGFIN_API}${cicloPagamentoModel._id}`).then(function(response) {
                mensagemFactory.adicionarMensagemSucesso("Operação realizada com Sucesso!");
                vm.refresh();
            }).catch(function (response) {
                mensagemFactory.adicionarMensagemErro(response.data);
            });
        };

        vm.update = function(cicloPagamentoModel) {
            vm.cicloPagamentoModel = cicloPagamentoModel;
            tablesFactory.show(vm, { isTableAtualizar: true });
        };

        vm.remove = function(cicloPagamentoModel) {
            vm.cicloPagamentoModel = cicloPagamentoModel;
            tablesFactory.show(vm, { isTableListar: true, isTableCadastrar: true });
        };

        vm.refresh = function() {
            $http.get(URL_PLGFIN_API).then(function(response) {
                vm.cicloPagamentoList = response.data;
                tablesFactory.show(vm, { isTableListar: true, isTableCadastrar: true });
            });
        };

        initializer();

    };

})();