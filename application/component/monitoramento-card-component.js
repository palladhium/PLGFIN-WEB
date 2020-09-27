angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").component("monitoramentoCardComponent", {
    bindings: {
      grid: "@",
      colorClass: "@",
      valor: "@",
      texto: "@",
      iconClass: "@"
    },
    controller: [
      "gridSystemFactory",
      function(gridSystemFactory) {
        this.$onInit = () => {
            this.gridClasses = gridSystemFactory.toCssClasses(this.grid) 
        };
      }
    ],
    template: `
    <div class="{{ $ctrl.gridClasses }}">
      <div class="small-box {{ $ctrl.colorClass }}">
        <div class="inner">
          <h3>{{ $ctrl.valor }}</h3>
          <p>{{ $ctrl.texto }}</p>
        </div>
        <div class="icon">
          <i class="{{ $ctrl.iconClass }}"></i>
        </div>
      </div>
    </div>
    `
  });