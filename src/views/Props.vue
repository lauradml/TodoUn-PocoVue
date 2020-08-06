<template>
  <div class="typeProps">
<TypeProps 
  v-for="(candidato, index) in candidatos"
  :key="index"
  :nombre="candidato.name.first"
  :correo="candidato.email"
  :imagen="candidato.picture.medium"
  :location="candidato.dob"

  ></TypeProps>

    
  </div>
</template>

<script>
import axios from 'axios';
import TypeProps from "@/components/TypeProps.vue";

export default {
  name: 'Props',
  components: {
    TypeProps
  },
  data(){
    return{
      candidatos:[],
    }
  },
  created(){
    this.obtenerCandidatos();
  },
  methods:{
    obtenerCandidatos(){
      axios.get('https://randomuser.me/api/?results=50')
      .then((respuesta) =>{
        this.candidatos= respuesta.data.results;
      })

    }

  }
}
</script>
