console.log(data);
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');

const electronic = data.filter(song =>{
    return song.genre === 'electronic';
})
.map(song =>{
    return `
    <div id = 'container11'>
    <div>  ${song.artist} <br> ${song.genre} <br> ${song.song} <br> <a href = ${song.video}>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    </div>
    `;
})
.join('');

const pop = data.filter(song =>{
    return song.genre === 'pop';
})
.map(song =>{
    return `
    <div id = 'container12'>
    <div>  ${song.artist} <br> ${song.genre} <br> ${song.song} <br> <a href = ${song.video}>song link </a> </div>
    <img src = ${song.image}>
    <br>
    <br>
    <br>
    </div>
    `;
})
.join('');

result2.innerHTML = pop;
result1.innerHTML = electronic;
//console.log('electronic', data.electronic);