<template>
<p>{{ joke }}</p>
</template>
<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    
    let joke = ref('');
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            
            console.log(response.data.value);
            joke.value = response.data.value;
        })
        .catch(error => {
            console.log(error);
        });
</script>