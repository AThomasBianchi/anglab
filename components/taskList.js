(function() {
  var taskList = {

    template:`
      <input placeholder="Filter your to-dos" ng-model="search">
      <ol>
        <li ng-repeat="task in $ctrl.tasks | filter: search" list-hover>
          {{ task.item }}
          <i class="material-icons xout" ng-click="$ctrl.removeTodo($index)" i-hover>clear</i>
        </li>
      </ol>
    `,

    controller: function(TaskService) {
      var vm = this;
      vm.tasks = TaskService.setData();
      vm.removeTodo = function(index) {
        vm.tasks.splice(index, 1);
      };
    }
    
  };

  angular
    .module("app")
    .component("taskList", taskList);

})();
