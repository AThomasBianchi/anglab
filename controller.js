(function() {
  function FormController() {
    var vm = this;
    vm.todoList = todoList;
  }

  todoList = [];

  angular
    .module("app")
    .controller("FormController", FormController);

})();
