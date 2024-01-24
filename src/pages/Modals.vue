<template>
    <h1>Modals</h1>
    
    <button class="button is-primary" @click="isOpen = true">open</button>
    <Modal :open = "isOpen" @close = "isOpen = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/v2/list" alt="">
        </p>
    </Modal>

    <button class="button is-primary" @click="isOpen2 = true">open2</button>
    <Modal :open = "isOpen2" @close = "isOpen2 = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/1280/960/?blur" alt="">
        </p>
    </Modal>

    <button class="button is-primary" @click="isOpen3 = true">open3</button>
    <Modal :open = "isOpen3" @close = "isOpen3 = false">
        <p class="image is-4by3">
            <img src="https://picsum.photos/seed/picsum/1280/960" alt="">
        </p>
    </Modal>
</template>
<script setup>
    import { ref } from 'vue';
    import Modal from '../components/Modal.vue';
    let isOpen = ref(false);
    let isOpen2 = ref(false);
    let isOpen3 = ref(false);
</script>