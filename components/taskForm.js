(function() {
    var taskForm = {
        bindings: {
          // todoList: "<"
          // bindings here
        },
        template:
        // put the form.addTodo(form.todo)
        `<form ng-submit="$ctrl.addTodo($ctrl.todo)">
          <input type="text" placeholder="Add your to-do" ng-model="$ctrl.todo">
          <button>Add</button>
        </form>`,
        // controller below
        controller: function(TaskService) {
            var vm = this;
            vm.addTodo = function(task) {
              TaskService.getData(task);
              vm.todo="";
            };
          }
        };

    angular
      .module("app")
      .component("taskForm", taskForm);
})();

// this needs to
// take input from the taskForm
// put input into todoList


// add specificity
// console log the steps
// link to it in html
// debug
