<template>
    <section v-if="this.$route.params.id">
        <form @submit.prevent="editar">
            <!-- ID -->
            <b-field label="Id">
                <b-input v-model="persona.idPers"></b-input>
            </b-field>
            <!-- Nombre -->
            <b-field label="Nombre">
                <b-input type="name"
                    v-model="persona.nombre"
                    maxlength="30">
                </b-input>
            </b-field>
            <!-- URL -->
            <b-field label="Url"
                type="is-success">
                <b-input v-model="persona.imagen"></b-input>
            </b-field>
            <div class="control">
                <button class="button is-primary">Editar</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: "Editando",
    data() {
        return {
            persona: {
                idPers: '',
                nombre: '',
                imagen: '',
            } 
        }
    },
    created() {
        let persona = {};
        persona = this.$store.getters.enviarPersonajes.find(resp => resp.id === this.$route.params.id)
        if(persona) {
            this.persona.idPers = persona.idPers;
            this.persona.nombre = persona.nombre;
            this.persona.imagen = persona.imagen;
        }else {
            this.$router.push('/home');
        }
    },
    methods: {
        editar() {
            this.$buefy.dialog.confirm({
            title: 'Editar personaje',
            message: '¿Seguro que deseas <b>EDITAR</b> este personaje?',
            confirmText: 'Editar',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
            this.$store.dispatch('actualizarPersonajes', this.persona);
            this.$buefy.toast.open('Personaje editado')
            }
        })
        }
    },
}
</script>

<style>

</style>