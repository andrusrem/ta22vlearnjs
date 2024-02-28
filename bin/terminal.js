function write(text)
{
    process.stdout.write(text);
}

// write("hello world"); write('\n');

// setTimeout(() => {
//     write('\x1B[5D'); write('TA22V'); write('\n');
// }, 5000);



setInterval(() => {
    write('\x1B[?251');
    write('\x1B[8D');
    let date = new Date();
    write(date.toTimeString().substring(0,8));
    write('\x1B[?25h');
}, 0);

