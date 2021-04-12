<template>
    <v-alert
        :border="border"
        :type="type"
        :icon="icons"
        :color="color"
        :value="display"
        :transition="transition"
        class="alert"
    >{{message}}</v-alert>
</template>

<script>
export default {
    props:{
        display:Boolean,
        color:String,
        border:String,
        type:String,
        icons:String,
        message:String,
        transition:String
    }
}
</script>

<style scoped>
.alert{
    position:fixed; 
    top: 20px; 
    left:20px;
    max-width: 400px;
    max-height: 200px;
    z-index:9999; 
    border-radius:10px;
}
</style>