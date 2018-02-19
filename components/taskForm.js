(function() {
  var taskForm = {

    template:
    // put the form.addTodo(form.todo)
      `
      <div>
        <p><a href="#!/welcome"><i class="material-icons">arrow_back</i>Go back</a></p>
        </a>
        <h1>TODO List</h1>
        <p>A place to store the things you have to do!</p>
        <task-list list="form.todoList"></task-list>
        <form ng-submit="$ctrl.addTodo($ctrl.todo)">
          <input type="text" placeholder="Add your to-do" ng-model="$ctrl.todo">
          <button>Add</button>
        </form>
      </div>
      `,

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
