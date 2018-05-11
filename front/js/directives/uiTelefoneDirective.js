angular.module('listaTelefonica').directive('uiTelefone', function () {
   return{
        require: "ngModel",
       link: function (scope, element, attrs, ctrl) {
            var _formatTelefone = function(telefone){

                telefone = telefone.replace(/[^0-9]+/g, "");
                if (telefone.length > 2){
                    telefone = '('+telefone.substring(0,2)+')'+telefone.substring(2);
                };
                if (telefone.length > 8){
                    telefone = telefone.substring(0,8)+'-'+telefone.substring(8, 12);
                }
              return telefone;
            };

            element.bind('keyup', function () {
                console.log(ctrl.$viewValue)
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
            });
       }
   };
});