<template>
    <div class="field has-addons">
        <p class="control">
            <button :disabled="!info.prev" class="button is-primary" @click="prev">Prev</button>
        </p>
        <p v-for="label in  generatePagination(page, info.pages)" class="control">
            <button class="button" :class="{'is-static' : label === '...', 'is-primary' : label===page }" @click="getPage(label)">{{ label }}</button>
        </p>
        <p class="control">
            <button :disabled="!info.next" class="button is-primary" @click="next">Next</button>
        </p>
    </div>
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
    let page = ref(1);
    getCharacters('https://rickandmortyapi.com/api/character');

    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            console.log(response.data.results);
            info.value = response.data.info;
            characters.value = response.data.results;
        })
        .catch(error => {
            console.log(error);
        });


    function getCharacters(url) 
    {
        axios.get(url)
            .then(response => {
                info.value = response.data.info;
                characters.value = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    function prev() 
    {
        getCharacters(info.value.prev);
        page.value--;
    }

    function next() 
    {
        getCharacters(info.value.next);
        page.value++;
    }

    function getPage(value) 
    {
        getCharacters(`https://rickandmortyapi.com/api/character?page=${value}`);
        page.value = value;
    }

    function generatePagination(current, total) 
    {
        let pages = [];

        for (let i = 1; i <= 3; i++)
        {
            pages[i] = i;
        }
        if(current > 2 && current < 41)
        {
            pages.push('...');
            for (let i = current - 1; i <= current + 1; i++)
            {
                pages[i] = i;
            }
        }
        pages.push('...');
        for (let i = total - 2; i <= total; i++)
        {
            pages[i] = i;
        }
        return pages.filter(val => val);
    }
    
</script>