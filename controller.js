// create controller with getter function
(function() {
  function FormController() {
    var vm = this;
    vm.todoList = [];

    vm.addTodo = function(desc) {
      vm.todoList.push({item: desc});
      vm.todo="";
    }
    vm.removeTodo = function(index) {
      vm.todoList.splice(index, 1);
    }
  }


  angular
    .module("app")
    .controller("FormController", FormController);

})();
