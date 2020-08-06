<template>
  <div class="firebase">
      <h2>hola firebase {{db.username}}</h2>

    
  </div>
</template>

<script>
// import TypeProps from "@/components/TypeProps.vue";
import firebase from "firebase"

export default {
  name: 'Firebase',
  components: {
    
  },
  data(){
    return{
        db:[]
    }
  },
  methods:{

    },
     created(){
    this.db= firebase.database();
    this.db.ref('/perfile/laudml').set({
      username: 'Laura',
      password: '123',
      ciudad:'Toledo'
    });
  },
}
</script>