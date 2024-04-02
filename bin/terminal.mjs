// function write(text)
// {
//     process.stdout.write(text);
// }

// // write("hello world"); write('\n');

// // setTimeout(() => {
// //     write('\x1B[5D'); write('TA22V'); write('\n');
// // }, 5000);



// setInterval(() => {
//     write('\x1B[?251');
//     write('\x1B[8D');
//     let date = new Date();
//     write(date.toTimeString().substring(0,8));
//     write('\x1B[?25h');
// }, 0);

import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}
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
        console.log("REQUEST!");
    } else {
        data = fs.readFileSync(cachePath);
    }
    
    let imgSrc = $('td[align="middle"]>img').attr('src');

    let imgTitle = $('td[align="middle"]>img').attr('title');
    
    
    
    
    await sleep(1000)
    console.log(imgTitle);
    console.log(imgSrc);
}