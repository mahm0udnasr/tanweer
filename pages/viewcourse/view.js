// get element
const setTitle = document.getElementById("setTitle");
const listOfCourses = document.querySelector(".listed__Course");
// get query params
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
let cont;
// function api
function getPlayList(title,PL_ID, pageToken = '') {
    setTitle.innerText = title;
    const API_KEY = 'AIzaSyADrUBaFPqow6AV08eX4CrE9wLzfEb4LDg'; // Replace with your actual API key
    const PLAYLIST_ID = PL_ID;
    const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=200&key=${API_KEY}&pageToken=${pageToken}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
        let Videos = data.items;
        Videos.forEach(video => {
            cont = 
            `   
                <div class="course">
                    <div class="thumbnil">
                        <img src="${video.snippet.thumbnails.default ?  video.snippet.thumbnails.default.url : 'https://i.ytimg.com/vi/NQrwLyRxfpg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnsKqi9jvU8JqT4Plhu_ODIfWIBg'}" alt="">
                    </div>
                    <div class="title">${video.snippet.title}</div>
                    <div class="watch">مشاهدة الأن</div>
                </div>
            `
            listOfCourses.innerHTML += cont;
        });
        const nextPageToken = data.nextPageToken;
        if (nextPageToken) {
            getPlayList(title, PL_ID, nextPageToken);
        } else {
            
        }
        })
        .catch(error => console.error('Error fetching playlist:', error));
}   

if (id == 0) {
    getPlayList("معلومات عن التوحد","PLVsvST0eEVNpP5iTINgjn72o3QNcVT732");
} else if (id == 1) {
    getPlayList("خطط علاجية لتدريب أطفال التوحد","PLXydiuB5i9mbuwihOr1ZAfXusGLwzAz6v");
} else if (id == 2) {
    getPlayList("برنامج أندلسية لعلاج التوحد", "PLXEe8Kb3St2TAAi215K9fQwA7_gitfvOG");
} else if (id == 3) {
    getPlayList("", "");
} else if (id == 4) {
    getPlayList("", "");
} else if (id == 5) {
    getPlayList("", "");
} 






