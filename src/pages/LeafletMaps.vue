<script setup>
    import LeafletMap from '../components/LeafletMap.vue';
    import {ref} from 'vue';
    
    let center = ref([59.426667, 24.743889]);
    let zoom = ref(19);
</script>

<template>
    <button class="button" @click="center=[59.4134567, 24.743889]">GO Home</button>
    <input type="range" min="1" max="20" v-model="zoom">
    <h3>{{ center }}</h3>
    <LeafletMap :center="center" :zoom="zoom" @zoom="zoom=$event" @center="center=$event"></LeafletMap>
</template>

<style scoped>
    
</style>