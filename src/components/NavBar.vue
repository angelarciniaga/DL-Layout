<template>
    <b-navbar>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link :to="{name: 'Home'}" class="nav-link">Inicio</router-link> | 
                <router-link :to="{name: 'Editando'}" class="nav-link">Editar</router-link>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link :to="{name: 'Registro'}" class="button is-primary"><strong>Regitro</strong></router-link>
                    <router-link :to="{name: 'Login'}" class="button is-light">Ingresar</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>