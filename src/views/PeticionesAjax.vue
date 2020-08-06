<template>
  <div class="home">

    <MisTareas :tareas="tareasAjax"></MisTareas>
    
  </div>
</template>

<script>
import axios from 'axios';
import MisTareas from "@/components/MisTareas.vue";


export default {
  name: 'Home',
  components: {
    MisTareas
  },
  data(){
    return{
      // personas:[],
      tareasAjax:[]
    }
  },
  created(){
    // this.getPersonas();
    this.getTareas();

  },
  methods:{


    //petición con vue resource

    // getPersonas(){
    //   debugger;
    //   this.$http.get('https://randomuser.me/api/?results=50')
    //   .then((respuesta) => {
    //     console.log(respuesta)
    //     this.personas= respuesta.body.results;
    //   });
    // }

    //petición con axios

     getTareas(){
      axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((respuesta) => {
        console.log(respuesta)
          this.tareasAjax= respuesta.data;
      });
    }
  }
}
</script>
