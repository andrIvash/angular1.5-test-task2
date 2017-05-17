'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function() {

    var vm = this;
    vm.newUser = {};
    vm.addUser = function(user) {
        console.log(user);
        vm.newUser = {};
        vm.myForm.$setPristine();
    };

});
