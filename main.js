
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const songList = $(".song-list");




const listPlayList = JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY));// Danh sách nhạc


const app = {
    currentPlayList: 0,//Danh sachs nhạc hiện tại

    renderListSong: function(){
        this.currentPlayList = 3
        const listSongHTML = listPlayList[this.currentPlayList].map(function(song){
            return `
                <li class="song-item">
                    <div class="song-left">
                        <div class="song-img">
                            <img src="${song.image}" alt="">
                            <div class="hover-play">
                                <i class="hover-play-icon bi bi-play-fill"></i>
                            </div>
                        </div>
                        <div class="song-item-info">
                            <h3 class="song-name">${song.name}</h3>
                            <span class="song-singer">${song.singer.join(", ")}</span>
                        </div>
                    </div>
                    <div class="song-min">
                        <span class="song-singer">04:30</span>
                    </div>
                    <div class="song-option">
                        <i class="song-option-icon bi bi-heart"></i>
                        <i class="song-option-icon bi bi-three-dots"></i>
                    </div>
                </li>
            `
        });

        songList.innerHTML = listSongHTML.join("");
    },


    render: function(){
        this.renderListSong();
    },

    handleEvent: function(){

    },

    start: function(){
        this.render();
    }
}

app.start();