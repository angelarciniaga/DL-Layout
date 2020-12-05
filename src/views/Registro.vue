<template>
    <section class="container">
        <h1 class="title is-1">Registrar</h1>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
        <b-button @click="clickMe">Registrar</b-button>
    </section>
    
</template>

<script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Registrado')
            }
        }
    }
</script>