console.log('mihir');

let audioElement = new Audio('songs/1.mp3');
let songindex =0;
let masterplay = document.getElementsByClassName('masterplay')
let master = document.getElementById('master');
let bar = document.getElementById('bar');

let songs = [
    { songname: "love me like you do ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "tum hi ho", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "tu pehla pehla pyar hai", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "295", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Rollin", filePath: "songs/4.mp3", coverPath: "covers/5.jpg" },

]

let html = ``;
let list = document.querySelector('.songlistcontainer')
let i=0;
function showsong() {

    songs.forEach(songs => {
        html += `
            <div class="songitem">
             <img src="${songs.coverPath}">
             <span>${songs.songname}</span>
              <audio src="${songs.filePath}" id="my-audio"></audio>
             <span class="songplay"><span>05:34 <i  class="far songplay fa-play-circle"  id="${i++}"></i></span>
         </span>
         </div>

         `
    }
    )
    list.innerHTML = html;
}

showsong();

let progress;


master.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        master.classList.remove('fa-play-circle');
        master.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        master.classList.remove('fa-pause-circle');
        master.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    bar.value = progress;
})

bar.addEventListener("click", () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;
})


const makeallplay =()=>
    {
        Array.from(document.getElementsByClassName('songplay')).forEach(element => {
           
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })   
    }

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener("click",(e)=>
    {
        songindex =parseInt(e.target.id)
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songindex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        master.classList.remove('fa-play-circle');
        master.classList.add('fa-pause-circle');
        sname.innerText = songs[songindex].songname

    })
})


document.getElementById('next').addEventListener("click",()=>
{
    if(songindex <=0)
        {
            songindex=9;
        }
        else
        {
            songindex +=1;
        }
        audioElement.src= `songs/${songindex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        master.classList.remove('fa-play-circle');
        master.classList.add('fa-pause-circle');
        sname.innerText = songs[songindex].songname


})


document.getElementById('previous').addEventListener("click",()=>
    {
        if(songindex <=9)
            {
                songindex=0;
            }
            else
            {
                songindex -=1;
            }
            audioElement.src= `songs/${songindex+1}.mp3`
            audioElement.currentTime=0;
            audioElement.play();
            master.classList.remove('fa-play-circle');
            master.classList.add('fa-pause-circle');
            sname.innerText = songs[songindex].songname

    
    })

    let sname = document.getElementById('sname');

