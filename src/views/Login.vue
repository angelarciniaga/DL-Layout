<template>
    <div>
        <h1 class="title is-1">Ingresar</h1>
        <form @submit.prevent="login">

            <b-field label="Correo">
                <b-input type="email"
                value="usuario@user.com"
                    v-model="form.email"
                    maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Contraseña">
                <b-input type="password" value="123456" v-model="form.password" password-reveal>
                </b-input>
            </b-field>
            <div class="control"> 
                <button class="button is-primary"  >Ingresar</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        data() {
            return {
                form:{
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                    firebase.auth().currentUser.sendEmailVerification().then(() => {
                        console.log('Ingreso Exitoso');
                    }).catch((error) => {
                        console.error(error);
                    })
                })
                this.$buefy.notification.open('Ingreso con exito');
                this.$router.push('/home').catch(() =>{});
            }
        }
    }
</script>