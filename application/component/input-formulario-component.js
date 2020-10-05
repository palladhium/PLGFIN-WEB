(function() {

    angular.module("PlataformaLancamentoGerenciadorFinanceiroModule").component("inputFormularioComponent", {
        bindings: {
            id: "@",
            type: "@",
            label: "@",
            grid: "@",
            placeholder: "@",
            model: "="
        },
        controller: [
            "gridSystemFactory",
            function(gridSystemFactory) {
                this.$onInit = () => {
                    this.gridClasses = gridSystemFactory.toCssClasses(this.grid);
                };
                
            }
        ],
        template: `
            <div class="row">
                <div class="{{$ctrl.gridClasses}}">
                    <div class="form-group">
                        <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                        <input id="{{$ctrl.id}}" type="{{$ctrl.type}}" placeholder="{{$ctrl.placeholder}}" ng-model="$ctrl.model" class="form-control"/>
                    </div>
                </div>
            </div>
        `
    });

})();