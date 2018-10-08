//renders the info
const result1 = document.querySelector('#result1');

//tells what to render
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const randomBtn = document.querySelector('#randomBtn');

//base page code

const home = data.filter(song =>{
    return song.genre === 'home';
})
.map(song =>{
    return `
    <h2> click the buttons above to pick a genre or a random song </h2>
    `
})
.join('');

result1.innerHTML = home;

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

//k-pop code

const kpop = data.filter(song =>{
    return song.genre === 'kpop';
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

//memes code

const memes = data.filter(song =>{
    return song.genre === 'memes';
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

btn1.addEventListener('click', () =>{
    result1.innerHTML = electronic;
});

btn2.addEventListener('click', () =>{    
    result1.innerHTML = pop;
});

btn3.addEventListener('click', () =>{
    result1.innerHTML = rap;
    alert('There is explicit content under this genre. You have been warned.');
});

btn4.addEventListener('click', ()=>{
    result1.innerHTML = rock;
    alert('Some songs may have explicit content. You have been warned.')
});

btn5.addEventListener('click', () =>{
    result1.innerHTML = kpop;
});

btn6.addEventListener('click', ()=>{
    result1.innerHTML = memes;
});


//renders the random song

randomBtn.addEventListener('click', ()=>{
    let math = Math.floor(Math.random()*65);
    result1.innerHTML = randomSong(data[math]);
});

//finds a random song
const randomSong=(data) =>{
    return `
    <div> ${data.genre} <br> ${data.artist} <br> ${data.song} <br> <a href = ${data.video} target = 'blank'>song link </a></div>
    <img src = ${data.image}>
    <br>
    <br>
    <br>
    `
}
console.log('data', data);
