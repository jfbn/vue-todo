<template>
  <div class="todo">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is the todo page</h1>
    <ul>
      <todo-item v-for="task in todos" 
      :key="task.id" 
      :name="task.name" 
      :deadline="task.deadline"
      :status="task.status"
      />
    </ul>
  </div>
</template>

<script>
import todoService from '../services/todoservice.js'
import TodoItem from '../components/TodoItem.vue'

export default {
  data(){
   return {
     todos: [],
   } 
  },
  components: {
    TodoItem
  },

  mounted(){
    console.log("de");
    todoService.getTodos()
    .then( (res) => {
      this.todos = res.data;
    })
  }    
}
</script>

