<template>
   
<div v-if="name">


    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Write" v-model="msg">
        </div>
        <div class="control">
            <a class="button is-info" @click="send()">
                Search
            </a>
        </div>
    </div>

    <p v-for="message in messages" class="mt-2">
    <div class="notification is-link is-light is-large inline-block p-3">
        <p class="has-text-dark">
            {{ message.name }}
        </p>
        {{ message.message }}

    </div>
    </p>
</div>
<div v-if="!name">


<div class="field has-addons">
    <div class="control is-expanded">
        <input class="input" type="text" placeholder="Your Name" v-model="inputName">
    </div>
    <div class="control">
        <a class="button is-info" @click="join()">
            Join
        </a>
    </div>
</div>

</div>
</template>
<script setup>
import { ref } from 'vue';
let inputName = ref('');
let name = ref('');
let messages = ref([
    {name:"dedf", message:"vghjkmnbgh"}
]);
let msg = ref('');
// Create WebSocket connection.
let socket;

// // Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
// });

// Listen for messages


function send() {
    if (msg.value.trim() != '') {
        socket.send(JSON.stringify({name: name.value, message: msg.value, isMe: false}));
        messages.value.push({name: name.value, message: msg.value, isMe: true});

    }
    msg.value = '';

    socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    JSON.parse(event.data);
});
}

function join()
{
    name.value = inputName.value;

    socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    JSON.parse(event.data);});
}
</script>
<style>
.inline-block {
    display: inline-block;
}
</style>