window.onload = function () {
  new Vue({
    //Bind this Vue instance to our container div with an ID of todo
    el: "#todo",

    //This is where we will register the values that hold data for our application
    data: {
      newTask: "",
      taskList: []
    },

    computed: {
      areAllSelected: function() {
        //Check if every checked property returns true and if there is at least one to-do item
        return this.taskList.every(function(task) {
          return task.checked;
        }) && this.taskList.length > 0;
      },
    },

    //This is where we will hold the methods we want to use in our application
    methods: {

      addTask: function() {
        //trim() is used to remove whitespace from both ends of a string
        var task = this.newTask.trim();

        if (task) {
          this.taskList.push({
            text: task,
            checked: false
          });
          this.newTask = "";
        }
      },

      removeTask: function(task) {
        // this.taskList.$remove(task); - depreciated in Vue 2.0

        var index = this.taskList.indexOf(task);
        this.taskList.splice(index, 1);
      },

      clearList: function() {
        this.taskList = [];
      },

      selectAll: function() {
        //targetValue is set to the opposite of areAllSelected
        var targetValue = this.areAllSelected ? false : true;

        for (i = 0; i < this.taskList.length; i++) {
          this.taskList[i].checked = targetValue;
        }

      }
    }
  });

  // new Vue ({
  //   el: "#demo",
  //
  //   data: {
  //     name: "Ayo Isaiah",
  //     testValue: "akfhadifasifhdlfkahflkjdhfl"
  //   },
  //
  //   methods: {
  //     alertName: function() {
  //       alert("Your name is " + this.name);
  //     }
  //   }
  // });
};
