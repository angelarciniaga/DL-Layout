<template>
    <b-carousel>
        <b-carousel-item v-for="(item, index) in personajes" :key="index">
            <section :class="`hero is-medium`">
                <div class="hero-body has-text-centered">
                  <h1 class="title">{{personajes[index].nombre}}</h1>
                  <img :src="personajes[index].imagen" alt="Placeholder image">
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
</template>
  <!-- <div class="container is-max-widescreen is-fluid">
    <div class="columns is-desktop">
      <div class="column is-half" v-for="(item, index) in personajes" :key="index">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="personajes[index].imagen" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                {{personajes[index].id}}
              </div>
              <div class="media-content">
                <p class="title is-4">{{personajes[index].nombre}}</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->


<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      personajes: [
      {
      'id': 1,
      'nombre': 'Morty',
      'imagen':
      'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
      },
      {
      'id': 2,
      'nombre': 'Rick',
      'imagen':
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
      'id': 3,
      'nombre': 'Summer',
      'imagen':
      'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
      },
      {
      'id': 4,
      'nombre': 'Beth',
      'imagen':
      'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
      },
      {
      'id': 5,
      'nombre': 'Jerry',
      'imagen':
      'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
      }
      ]
    }
  },
}
</script>
