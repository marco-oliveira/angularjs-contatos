angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras,serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    var generateSerial = function(contatos){
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        })
    };

    $scope.removerContato = function (contatos) {
        $scope.contatos  = contatos.filter(function (contato) {
            if (!contato.selecionado){
                return contatos;
            }
        })
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        })
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    generateSerial($scope.contatos);
});