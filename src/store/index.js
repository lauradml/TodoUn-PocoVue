import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombre: 'laura',
    apellidos: 'Medina Axeijas',
    profesion: 'Developer',
    ciudad:'Madrid',
    cantidad:'0',

    tareas:[
      {nombre:'Repasar vue', completado:false},
      {nombre:'Repasar vuex', completado:false},
      {nombre:'Repasar router', completado:false},
      {nombre:'Mirar ionic', completado:false},
     
    ],
    
  },
  getters: {
   tareasCompletadas: (state) => {
      // return state.tareas.filter((tareas) => tareas.completado).lenght;
          return state.tareas.filter((tarea) =>{
                return tarea.completado;
            }).length;
    }

  },

  mutations: {
    aumentar:(state) => state.cantidad++,
    // reducir: (state) => state.cantidad--
    reducir(state){
      if(state.cantidad <= 0){
        state.cantidad = 0
      }else{
        state.cantidad--
      }
    }
  },
  actions: {
    aumetarAsync: (context) =>{
      setTimeout(()=> context.commit('aumentar'), 2000);
    },
    reducirAsync: (context) =>{
      setTimeout(()=> context.commit('reducir'), 2000);
    }

  },
  modules: {
  }
});
