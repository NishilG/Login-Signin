/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Double Apple iFhone iPhone Parody Ashish Chanchlani 4K UHD (With English Subtitles)',
        'name': 'Double Apple iFhone iPhone Parody Ashish Chanchlani 4K UHD (With English Subtitles).mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': 'Exams Ka Mausam Ashish Chanchlani',
        'name': 'Exams Ka Mausam Ashish Chanchlani.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'Final Exams Ashish Chanchlani',
        'name': 'Final Exams Ashish Chanchlani.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'He Felt Weak, So I Transformed Him in 30 Days',
        'name': 'He Felt Weak, So I Transformed Him in 30 Days.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'He Got Called Fat, So He Got Shredded in 90 Days',
        'name': 'He Got Called Fat, So He Got Shredded in 90 Days.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'I Only Played Fitness Games For 24 Hours Straight',
        'name': 'I Only Played Fitness Games For 24 Hours Straight.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'I Ran Every Day For 30 Days, These Are The Results',
        'name': 'I Ran Every Day For 30 Days, These Are The Results.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'I Tried To Become Superhuman in 7 Days',
        'name': 'I Tried To Become Superhuman in 7 Days.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'I Tried To Become Superhuman in 7 Days',
        'name': 'I Tried To Become Superhuman in 7 Days.mp4',
        'duration': '3:38',

    },
    {
        'id': 'a10',
        'title': 'Beginner Tries To Run World’s Hardest Marathon',
        'name' : 'Beginner Tries To Run World’s Hardest Marathon.mp4',
        'duration': '14:18'
    }

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
