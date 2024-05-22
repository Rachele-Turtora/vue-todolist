const { createApp } = Vue

  createApp({
    data() {
      return {
        todo: [
            {
                text: "Quarterly newsletter",
                done: true
            },
            {
                text: "Recruiting blog post",
                done: false
            },
            {
                text: "Mobile app luaunch",
                done: false
            },
            {
                text: "Interview John H.",
                done: true
            },
            {
                text: "Summit update to mobile storefronts",
                done: false
            }
        ],
        newTask: ""
      }
    },
    methods: {
        removeTask(index){
            this.todo.splice(index, 1);
        },

        addTask(){
            this.todo.push({
                text: this.newTask,
                done: false
            });
            this.newTask = "";
        },
        
        done(index){
            this.todo[index].done = !this.todo[index].done
        }
    }
  }).mount('#app')