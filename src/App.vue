<script setup>
    import { ref, reactive } from 'vue';
    let message = ref('Hello Vuuuuueeeeeee');
    let count = ref(0);
    let newitem = ref('item');
    let items = reactive([
        'leib',
        'viin',
        'piim'
    ]);

    function AddItem()
    {
        if(newitem.value.trim() !== '')
        {
            items.push(newitem.value);
        }
        newitem.value = "";
    }
</script>

<template>
    <div class="container">
        {{ message }} 
        <button class="button is-primary" @click="count++">Count {{ count }}</button>
       <!--<input type="text" class="input mt-2" :value="message" @input="message=$event.target.value">--> 
       <input type="text" v-model="message" class="input mt-2">
        {{ message.split('').reverse().join('') }}
        <input type="text" v-model="newitem" class="input mt-2" @keydown.enter="AddItem()">
        <button class="button is-primary" @click="AddItem()">Add Shit</button>
        <div class="content">
            <ul>
                <li v-for="item in items">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    
</template>