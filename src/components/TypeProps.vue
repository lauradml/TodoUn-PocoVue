<template>
  <div class="typeProps">
    <img :src="imagen" aling="right" />
    <h2>{{nombre}}</h2>
    <h3>{{correo}}</h3>
    <ul>
      <li v-for="(value, index) in location" :key="index">{{value}}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "GaTypePropsnador",
  props: {
    nombre: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      default: "No ha especificado correo"
    },
    imagen: String,
    location: Object
  }
};
</script>
  

