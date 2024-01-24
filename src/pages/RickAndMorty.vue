<template>
    <div class="columns is-multiline">
        <div v-for="char in characters" class="column is-one-quarter">
            <CharacterCard :character="char"></CharacterCard>
        </div>
    </div>
</template>
<script setup>
    import CharacterCard from '../components/CharacterCard.vue';
    import axios from 'axios';
    import { ref, reactive } from 'vue';

    let info = ref({});
    let characters = ref([]);

    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            console.log(response.data.results);
            info.value = response.data.info;
            characters.value = response.data.results;
        })
        .catch(error => {
            console.log(error);
        });
</script>