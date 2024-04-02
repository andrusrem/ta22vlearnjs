
<script setup>
import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}
let imgs = [];
for(let i = 4172; i>4162; i--){
    let res = await axios.get('https://www.qwantz.com/index.php?comic=' + i);
    const $ = cheerio.load(res.data);
    let cachePath = `cache/${i}.html`;
    let data;
    if(!fs.existsSync(cachePath)){
        await sleep(2000);
        let res = await axios.get('https://www.qwantz.com/index.php?comic=' + i);
        //CACHE
        fs.writeFileSync(cachePath, res.data);
        data = res.data;
        console.log("LIVE REQUEST!");
    } else {
        data = fs.readFileSync(cachePath);
        imgs.data = data;
    }
    
    let imgSrc = $('td[align="middle"]>img').attr('src');

    let imgTitle = $('td[align="middle"]>img').attr('title');
    
    
    
    
    await sleep(1000)
    console.log(imgTitle);
    console.log(imgSrc);
}
</script>

<template>
    <div v-for="img in imgs">
        <img @src="img.data" alt="">
    </div>
    
</template>
