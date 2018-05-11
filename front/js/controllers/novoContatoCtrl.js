angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $location, operadoras) {
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContatos(contato).then(function (response) {
            $scope.carregarContatos();
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        })
    };

});