(function() {

  function TaskService() {
    
    var todoList = [];
    return {
      getData: getData,
      setData: setData
    }

    function getData(task) {
      todoList.push({item: task});
    }

    function setData() {
      return todoList;
    }
  }

  angular
    .module("app")
    .factory("TaskService", TaskService);

})();
