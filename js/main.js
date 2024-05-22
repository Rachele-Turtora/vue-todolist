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
        ]
      }
    },
    methods: {
        remove(index){
            this.todo.splice(index, 1);
        }
    }
  }).mount('#app')