import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: [],
  },
  getters: {
    enviarPersonajes(state) {
      return state.personajes;
    }
  },
  mutations: {
    mutarPersonajes(state, arreglo) {
      state.personajes = arreglo;
    }
  },
  actions: {
    traerDatos({commit}) {
      db.collection('personajes').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(element => {
          arreglo.push({
            id: element.id,
            idPers: element.data().id,
            nombre: element.data().nombre,
            imagen: element.data().imagen,
          });
        });
        commit('mutarPersonajes', arreglo)
      })
    },
    eliminarPersonaje(context, id) {
      db.collection('personajes').doc(id).delete().then(() =>{
        console.log('Eliminado');
      }).catch(error =>{
        console.log(error);
      })
    },
    actualizarPersonajes(contex, personajes) {
      db.collection('personajes').doc(personajes.id).update({
        nombre: personajes.nombre,
        idPers: personajes.idPers +1,
        imagen: personajes.imagen,
      })
      router.replace('/home')
    }
  },
  modules: {
  }
})
