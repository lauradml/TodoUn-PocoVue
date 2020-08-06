<template>
  <div class="mis-tareas">
      <ul>
          <li v-for="(tarea, index) in tareas" :key="index">{{tarea.title}}</li>
      </ul>
   
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Mis-tareas',
  props: ['tareas']
 
}
</script>