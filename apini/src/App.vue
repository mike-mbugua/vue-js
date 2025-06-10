<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Mike')
    const status= ref('active')
    const tasks = ref(['task 1','task 2', 'task 3'])
    const newTask = ref('')
    
    const togleStatus= ()=>{
      if (status.value === 'active') {
        status.value= 'pending'
      }else if(status.value === 'pending'){
        status.value='inactive'
      }else{
        status.value='active'
      }
    }
    const addTask = ()=>{
      if (newTask.value.trim !== '') {
        tasks.value.push(newTask.value);
        newTask.value=''
      }
    }
    return{
        name,
        status,
        tasks,
        newTask,
        togleStatus,
        addTask
      }
  }
}
  
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status==='active'">User is Active</p>
  <p v-if="status==='pending'">User is pending</p>
  <p v-if="status==='inactive'">User is Inactive</p>
<form @submit.prevent="addTask">
  <label for="newTask">Add Task</label>
  <input type="text" name="newTask" id="newTask" v-model="newTask">
  <button @submit="">Submit</button>
</form>
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <button @click="togleStatus">toggle</button>
</template>

