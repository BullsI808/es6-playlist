console.log(data);
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

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


btn1.addEventListener('click', function(){
    result1.innerHTML = electronic;
});

btn2.addEventListener('click', function(){    
    result1.innerHTML = pop;
})

//console.log('electronic', data.electronic);