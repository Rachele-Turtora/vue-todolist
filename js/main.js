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
        newTask: "",
        findTask: null
      }
    },
    methods: {
        removeTask(index){
            //this.todo.splice(index, 1);
            this.todo = this.todo.filter((_, i) => i !== index);
        },

        addTask(){
            if (!this.newTask) return;
            this.todo.push({
                text: this.newTask.trim(),  // toglie spazi prima e dopo
                done: false
            });
            this.newTask = "";
        },
        
        toggle(index){
            this.todo[index].done = !this.todo[index].done;
        },

        searchTask(){
            if (this.findTask){
                return this.todo.filter((element) => {
                    return element.text.toLowerCase().includes(this.findTask.toLowerCase())
                })
            } else {
                return this.todo
            }
        }
    }
  }).mount('#app')