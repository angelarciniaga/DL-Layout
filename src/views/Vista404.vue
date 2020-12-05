<template>
    <div class="notification is-danger">
        <button class="delete"></button>
        Pagina no existe. Ingrese a la pagina de <router-link :to="{name: 'Home'}">Inicio</router-link> para redireccionarlo.
    </div>
</template>