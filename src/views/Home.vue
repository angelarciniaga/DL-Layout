<template>
    <div class="columns">
        <div class="column" v-for="(item, index) in traerPersonajes" :key="index">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="traerPersonajes[index].imagen" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="traerPersonajes[index].imagen" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{traerPersonajes[index].nombre}}</p>
                  <p class="subtitle is-6">{{traerPersonajes[index].idPers}}</p>
                </div>
            </div>
            <div class="field is-grouped">
              <p class="control">
                <button class="button is-primary" @click.prevent="editarPersonajes(traerPersonajes[index].idPers)">
                  Editar
                </button>
              </p>
              <p class="control">
                <button class="button is-danger" @click.prevent="eliminarPersonajes(item.id)">
                  Eliminar
                </button>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  mounted() {
    this.$store.dispatch('traerDatos');
  },
  computed: {
    traerPersonajes() {
      return this.$store.getters.enviarPersonajes;
    }
  },
  methods: {
    editarPersonajes(id) {
      this.$router.push({name: 'Editando', params: {id: id}});
    },
    eliminarPersonajes(id) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar personaje',
        message: '¿Seguro que deseas <b>ELIMINAR</b> este personaje?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$store.dispatch('eliminarPersonaje', id);
          this.$buefy.toast.open('Personaje eliminado')
        }
      })
    }
  },
}
</script>
