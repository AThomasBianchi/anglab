(function() {
  var taskList = {
    bindings: {
      // list: "<"
    },

    template:`
    <input placeholder="Filter your to-dos" ng-model="search">
    <ol>
      <li ng-repeat="task in $ctrl.tasks | filter: search" list-hover>
        {{ task.item }}
        <i class="material-icons" ng-click="$ctrl.removeTodo($index)" i-hover>clear</i>
      </li>
    </ol>
    `,

    controller: function(TaskService) {
      var vm = this;
      vm.tasks = TaskService.setData();
      console.log(vm.tasks);
      vm.removeTodo = function(index) {
        vm.tasks.splice(index, 1);
      };
    }

  };

  angular
    .module("app")
    .component("taskList", taskList);

})();

// <input placeholder="Filter your to-dos" ng-model="search">
// <ol>
//   <li ng-repeat="task in todoList | filter: search">
//     <i class="material-icons" ng-click="$ctrl.removeTodo($index)">clear</i>
//   </li>
// </ol>

// build empty component
// build template from html
// add specificity
// console log the steps
// link to it in html
// debug
