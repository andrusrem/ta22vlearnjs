<script setup>
    import * as L from 'leaflet';
    import { onMounted, watch } from 'vue';
    import 'leaflet/dist/leaflet.css';

    const props = defineProps(['center', 'zoom']);
    const emit = defineEmits(['zoom', 'center']);
    let map;

    onMounted(() => {
        
        map = L.map('map').setView(props.center, props.zoom);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        map.on('zoomend', () => {
            emit('zoom', map.getZoom());
        });
        map.on('moveend', () => {
            emit('center', map.getCenter());
        });
    });
    
    watch(() => props.center, (newCenter, oldCenter) => {
        if(newCenter !== oldCenter)
        {
            map.flyTo(newCenter);
        }
        
    });
    watch(() => props.zoom, (newZoom, oldZoom) => {
        if(newZoom !== oldZoom)
        {
            map.setZoom(newZoom);
        }
        
    });

</script>

<template>
    <div id="map"></div>
</template>

<style scoped>
    #map {
        height: 600px;
    }
</style>