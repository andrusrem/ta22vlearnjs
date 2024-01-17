<script setup>
    import { ref, reactive, computed } from 'vue';
    import ItemList from '../components/ItemList.vue';
    let message = ref('Hello Vuuuuueeeeeee');
    let count = ref(0);
    let newitem = ref('item');
    let i = 0;
    let items = reactive([
        {id:i++, name:'kommit', isDone: false},
        {id:i++, name:'olu', isDone: false},
        {id:i++, name:'piim', isDone: false},
    ]);

    function AddItem()
    {
        if(newitem.value.trim() !== '')
        {
            items.push({id:i++ ,name: newitem.value.trim(), isDone:false});
        }
        newitem.value = "";
    }
    const doneItems = computed(()=>{
        return items.filter(item => item.isDone);
    });
    const notDoneItems = computed(()=>{
        return items.filter(item => !item.isDone);
    });
</script>

<template>

    <div class="container">
        <div class="field has-addons m-2">
            <div class="control is-expanded">
                <input class="input" type="text" v-model="newitem" @keydown.enter="AddItem">
            </div>
            <div class="control">
                <a class="button is-info"  @click="AddItem">
                    Add item
                </a>
            </div>
        </div>
        <div class="content">
            <ItemList title="All Items" :items="items"></ItemList>
            <ItemList title="Done Items" :items="doneItems"></ItemList>
            <ItemList title="To Do Items" :items="notDoneItems"></ItemList>
        </div>
     </div>
    
</template>