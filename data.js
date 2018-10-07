const data = [
    {
        artist: 'shapov & trouze',
        genre: 'electronic',
        song: 'the way',
        image: 'http://weraveyou.com/wp-content/uploads/2018/01/desktop_2560x1440.png',
        video:'https://www.youtube.com/watch?v=1FCCpO0er44'
    },

    {
        artist: 's3rl',
        genre: 'electronic',
        song: 'its this again',
        image: 'https://i.ytimg.com/vi/ASW38HVbZls/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=ASW38HVbZls'
    },

    {
        artist: 's3rl',
        genre: 'electronic',
        song: 'beat all the odds',
        image: 'https://i.ytimg.com/vi/2P_KqFUEsDc/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=2P_KqFUEsDc'
    },

    {
        artist: 'masara',
        genre: 'electronic',
        song: 'tegami',
        image: 'https://i.ytimg.com/vi/ZIu1ec_VDys/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=ZIu1ec_VDys'
    },

    {
        artist: 'dark cat',
        genre: 'electronic',
        song: 'bubble tea',
        image: 'https://i.ytimg.com/vi/7PYe57MwxPI/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=7PYe57MwxPI'
    },

    {
        artist: 'marshmello',
        genre: 'electronic',
        song: 'alone',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Alone_Marshmello_cover.jpg/220px-Alone_Marshmello_cover.jpg',
        video: 'https://www.youtube.com/watch?v=ALZHF5UqnU4'
    },

    {
        artist:'dark cat',
        genre:'electronic',
        song:'crazy milk',
        image:'https://i.ytimg.com/vi/7xFe0vkUJXU/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=7xFe0vkUJXU'
    },

    {
        artist:'s3rl',
        genre:'electronic',
        song:'earth Bb',
        image:'https://i.ytimg.com/vi/95YLslorEHw/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=95YLslorEHw'
    },

    {
        artist:'s3rl',
        genre:'electronic',
        song:'green hills 2017',
        image:'https://i.ytimg.com/vi/yEr9zj369Ks/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=yEr9zj369Ks'
    },

    {
        artist:'s3rl & radio gosha',
        genre:'electronic',
        song:'clickbait',
        image:'https://i.ytimg.com/vi/qjwdex6HPbI/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=qjwdex6HPbI'
    },

    {
        artist:'F4st',
        genre:'electronic',
        song:'drunk leprechaun',
        image:'https://i.ytimg.com/vi/t79EXowN5g8/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=moRwHBgdCAw'
    },

    {
        artist:'Aero chord',
        genre:'electronic',
        song:'shadows',
        image:'https://i.ytimg.com/vi/yquqvP4t-l0/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=6457bpRtA80'
    },

    {
        artist:'cartoon',
        genre:'electronic',
        song:'why we lose',
        image:'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F45679afe4418b91a56f686ddc956416d.500x500x1.jpg',
        video:'https://www.youtube.com/watch?v=zyXmsVwZqX4'
    },

    {
        artist:'s3rl',
        genre:'electronic',
        song:'the legend of link',
        image:'https://i.ytimg.com/vi/YoWEMeJMP5U/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=YoWEMeJMP5U'
    },

    {
        artist:'OMFG',
        genre:'electronic',
        song:'hello',
        image:'https://i.ytimg.com/vi/ih2xubMaZWI/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=ih2xubMaZWI'
    },

    {
        artist: 'joji',
        genre: 'rap', 
        song: 'head in the clouds',
        image: 'https://i.ytimg.com/vi/CX4fG9jLz_o/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=CX4fG9jLz_o'
    },

    {
        artist: 'DJ khalid',
        genre: 'rap', 
        song: 'im the one',
        image: 'https://i.ytimg.com/vi/weeI1G46q0o/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=pg60q_MhA5g'
    },

    {
        artist: 'ayo & teo',
        genre: 'rap', 
        song: 'rolex',
        image: 'https://i.ytimg.com/vi/4LNXovWNmWQ/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=lwk5OUII9Vc'
    },

    {
        artist: 'migos',
        genre: 'rap', 
        song: 'stir fry',
        image: 'https://i.ytimg.com/vi/HI-mXMr8glQ/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=r2_aIixdTF4'
    },

    {
        artist: 'KYLE',
        genre: 'rap', 
        song: 'ispy',
        image: 'https://i.ytimg.com/vi/5XK4v2fgMPU/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=sY3WWnqbY5Q'
    },

    {
        artist: 'lil dicky',
        genre: 'rap', 
        song: 'freaky friday',
        image: 'https://i.ytimg.com/vi/8SgmWihcCYM/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=1tmRSmdMNm4'
    },

    {
        artist: 'owl city',
        genre: 'pop', 
        song: 'when can i see you again',
        image: 'https://i.ytimg.com/vi/fpnUrPUlJXY/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=fpnUrPUlJXY'
    },

    {
        artist: 'a-ha',
        genre: 'pop', 
        song: 'take on me',
        image: 'https://i.ytimg.com/vi/djV11Xbc914/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=djV11Xbc914'
    },

    {
        artist: 'owl city',
        genre: 'pop', 
        song: 'fireflies',
        image: 'https://i.ytimg.com/vi/psuRGfAaju4/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=psuRGfAaju4'
    },

    {
        artist: 'ed sheeran',
        genre: 'pop', 
        song: 'shape of you',
        image: 'https://i.ytimg.com/vi/1dv7iGA4hQw/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=JGwWNGJdvx8'
    },

    {
        artist: 'justin bieber',
        genre: 'pop', 
        song: 'children',
        image: 'https://i.ytimg.com/vi/nkjwn240AMc/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=nkjwn240AMc'
    },

    {
        artist: 'bruno mars',
        genre: 'pop', 
        song: '24k magic',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41NKk2fHW6L._SY355_.jpg',
        video:'https://www.youtube.com/watch?v=UqyT8IEBkvY'
    },

    {
        artist:'bee gees',
        genre:'pop',
        song:'stayin alive',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Bee_Gees_Stayin_Alive.jpg/220px-Bee_Gees_Stayin_Alive.jpg',
        video:'https://www.youtube.com/watch?v=I_izvAbhExY'
    },

    {
        artist:'village people',
        genre:'pop',
        song:'YMCA',
        image:'https://static.spin.com/files/120509-village-people-640x426.png',
        video:'https://www.youtube.com/watch?v=mMPSyOB2qNo'
    },

    {
        artist:'rick astley',
        genre:'pop',
        song:'never gonna give you up',
        image:'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },

    {
        artist:'cartoons',
        genre:'pop',
        song:'witch doctor',
        image:'https://i.ytimg.com/vi/EAhL6aaxlPQ/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=TYgOlqinH7A'
    },

    {
        artist:'smash mouth',
        genre:'pop',
        song:'all star',
        image:'https://i.ytimg.com/vi/L_jWHffIx5E/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=L_jWHffIx5E'
    },

    {
        artist: 'the eagles',
        genre:'rock',
        song:'hotel california',
        image:'https://images-na.ssl-images-amazon.com/images/I/91eh6ApLnzL._SY355_.jpg',
        video:'https://www.youtube.com/watch?v=aNyK6EcHlzM'
    },

    {
        artist: 'three days grace',
        genre:'rock',
        song:'time of dying',
        image:'https://i.ytimg.com/vi/x9W598i7hGU/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=x9W598i7hGU'
    },

    {
        artist: 'skillet',
        genre:'rock',
        song:'monster',
        image:'https://i.ytimg.com/vi/1mjlM_RnsVE/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=1mjlM_RnsVE'
    },

    {
        artist: 'three days grace',
        genre:'rock',
        song:'not too late',
        image:'https://i.ytimg.com/vi/GP8VU7ofxn8/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=SRbA_JzFKuA'
    },

    {
        artist: 'nickel back',
        genre:'rock',
        song:'far away',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Far_Away.jpg/220px-Far_Away.jpg',
        video:'https://www.youtube.com/watch?v=j4y-RzVGrHg'
    },

    {
        artist: 'nickel back',
        genre:'rock',
        song:'rockstar',
        image:'https://i.ytimg.com/vi/8jzCTnctiuA/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=6lq3voaRrMM'
    },
    
    {
        artist: 'survivor',
        genre:'rock',
        song:'eye of the tiger',
        image:'https://i.ytimg.com/vi/FLZS3jQPnKw/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=btPJPFnesV4'
    },

    {
        artist: 'bon jovi',
        genre:'rock',
        song:'wanted dead or alive',
        image:'https://i.ytimg.com/vi/SRvCvsRp5ho/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=SRvCvsRp5ho'
    },

    {
        artist: 'queen',
        genre:'rock',
        song:'bohemian rhapsody',
        image:'https://images-na.ssl-images-amazon.com/images/I/51an%2Buz6PAL._SY355_.jpg',
        video:'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
    },

    {
        artist: 'aerosmith',
        genre:'rock',
        song:'dream on',
        image:'https://i.ytimg.com/vi/ooN41rLTEIk/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=3-2u2lhGO4w'
    },

    {
        artist: 'AC/DC',
        genre:'rock',
        song:'back in black',
        image:'https://i.ytimg.com/vi/EE4u3HB1rUw/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=pAgnJDJN4VA'
    },

    {
        artist: 'AC/DC',
        genre:'rock',
        song:'thunderstruck',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ACDC-Thunderstruck.png/220px-ACDC-Thunderstruck.png',
        video:'https://www.youtube.com/watch?v=v2AC41dglnM'
    },

    {
        artist: 'bon jovi',
        genre:'rock',
        song:'livin on a prayer',
        image:'https://i.ytimg.com/vi/lDK9QqIzhwk/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=lDK9QqIzhwk'
    },

    {
        artist: 'journey',
        genre:'rock',
        song:'dont stop believin',
        image:'https://i.ytimg.com/vi/gWU8YyYjm5c/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=1k8craCGpgs'
    },

    {
        artist:'girls generation',
        genre:'kpop',
        song:'gee',
        image:'https://i.ytimg.com/vi/U7mPqycQ0tQ/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=U7mPqycQ0tQ'
    },

    {
        artist:'TWICE',
        genre:'kpop',
        song:'what is love',
        image:'https://i.ytimg.com/vi/i0p1bmr0EmE/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=i0p1bmr0EmE'
    },

    {
        artist:'TWICE',
        genre:'kpop',
        song:'likey',
        image:'https://i.ytimg.com/vi/V2hlQkVJZhE/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=V2hlQkVJZhE'
    },

    {
        artist:'MOMOLAND',
        genre:'kpop',
        song:'baam',
        image:'https://i.ytimg.com/vi/txWmd7QKFe8/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=txWmd7QKFe8'
    },

    {
        artist:'PSY',
        genre:'kpop',
        song:'DADDY',
        image:'https://i.ytimg.com/vi/FrG4TEcSuRg/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=FrG4TEcSuRg'
    },

    {
        artist:'PSY',
        genre:'kpop',
        song:'gangnam style',
        image:'https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=9bZkp7q19f0'
    },

    {
        artist:'sunstroke project',
        genre:'memes',
        song:'run away',
        image:'https://i.ytimg.com/vi/DNTdDczhYuE/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=pHXDMe6QV-U'
    },

    {
        artist:'awolnation',
        genre:'memes',
        song:'sail',
        image:'https://i.ytimg.com/vi/NcSg6Z1ROOo/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=tgIqecROs5M'
    },

    {
        artist:'drake',
        genre:'memes',
        song:'hotline bling',
        image:'https://i.ytimg.com/vi/uxpDa-c-4Mc/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=uxpDa-c-4Mc'
    },

    {
        artist:'bazzi',
        genre:'memes',
        song:'mine',
        image:'https://i.ytimg.com/vi/_O48Cysvyho/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=Gc71AmT_b2k'
    },

    {
        artist:'yes',
        genre:'memes',
        song:'roundabout',
        image:'https://vignette.wikia.nocookie.net/jjba/images/0/0f/Jojo_ED1.jpg/revision/latest?cb=20161224022029',
        video:'https://www.youtube.com/watch?v=cPCLFtxpadE'
    },

    {
        artist:'ween',
        genre:'memes',
        song:'ocean man',
        image:'https://i.ytimg.com/vi/tkzY_VwNIek/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=tkzY_VwNIek'
    },

    {
        artist:'imogen heap',
        genre:'memes',
        song:'hide and seek',
        image:'https://img.discogs.com/DJkoxmgqQBZ8RBd2Zo9pRyN974o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-880823-1169058994.jpeg.jpg',
        video:'https://www.youtube.com/watch?v=UYIAfiVGluk'
    },

    {
        artist:'yeah yeah yeahs',
        genre:'memes',
        song:'heads will roll',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Headswillroll.jpg/220px-Headswillroll.jpg',
        video:'https://www.youtube.com/watch?v=auzfTPp4moA'
    },

    {
        artist:'enya',
        genre:'memes',
        song:'only time',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Enya_-_Only_Time_cover.jpg/220px-Enya_-_Only_Time_cover.jpg',
        video:'https://www.youtube.com/watch?v=7wfYIMyS_dI'
    },

    {
        artist:'bag raiders',
        genre:'memes',
        song:'shooting stars',
        image:'https://i.ytimg.com/vi/fG-H5Zn5Coo/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=feA64wXhbjo'
    },

    {
        artist:'chamillionaire',
        genre:'memes',
        song:'ridin',
        image:'https://i.ytimg.com/vi/Qp-cu1NtrLE/hqdefault.jpg',
        video:'https://www.youtube.com/watch?v=jyszP2M8LFI'
    },

    {
        artist:'haddaway',
        genre:'memes',
        song:'what is love',
        image:'https://i.ytimg.com/vi/Ma24wmAjRGo/maxresdefault.jpg',
        video:'https://www.youtube.com/watch?v=HEXWRTEbj1I'
    },
];