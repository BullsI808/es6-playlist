//renders the info
const result1 = document.querySelector('#result1');

//tells what you render
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

//electronic code

const electronic = data.filter(song =>{
    return song.genre === 'electronic';
})
.map(song =>{
    return `
    <div>  ${song.genre} <br> ${song.artist} <br> ${song.song} <br> <a href = ${song.video} target = 'blank'>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    `;
})
.join('');

//pop code

const pop = data.filter(song =>{
    return song.genre === 'pop';
})
.map(song =>{
    return `
    <div>  ${song.genre} <br> ${song.artist} <br> ${song.song} <br> <a href = ${song.video} target = 'blank'>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    `;
})
.join('');


//rap code

const rap = data.filter(song =>{
    return song.genre === 'rap';
})
.map(song =>{
    return `
    <div>  ${song.genre} <br> ${song.artist} <br> ${song.song} <br> <a href = ${song.video} target = 'blank'>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    `;
})
.join('');

//rock code

const rock = data.filter(song =>{
    return song.genre === 'rock';
})
.map(song =>{
    return `
    <div>  ${song.genre} <br> ${song.artist} <br> ${song.song} <br> <a href = ${song.video} target = 'blank'>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    `;
})
.join('');

//runs the constants above

btn1.addEventListener('click', function(){
    result1.innerHTML = electronic;
});

btn2.addEventListener('click', function(){    
    result1.innerHTML = pop;
});

btn3.addEventListener('click', function(){
    result1.innerHTML = rap;
});

btn4.addEventListener('click', function(){
    result1.innerHTML = rock;
});

//console.log('electronic', data.electronic);