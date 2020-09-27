angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").component("contentHeaderComponent", {
    bindings: {
        tituloTela: "@",
        subtituloTela: "@",
    },
    template: `
        <section class="content-header">
            <h1>{{ $ctrl.tituloTela }} <small>{{ $ctrl.subtituloTela }}</small></h1>
        </section>
    `
 });