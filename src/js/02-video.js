import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
        console.log(data);
        localStorage.setItem('videoplayer-current-time', data.seconds);
    };
    // data for event 'timeupdate':
    // {
    //     duration: 61.857
    //     percent: 1
    //     seconds: 61.857
    // }

    player.on('timeupdate', throttle(onPlay, 1000));
    // examples:
    // player.on('eventName', onPlay);
    // player.on('eventName', function());

    const currentTime = Number(localStorage.getItem('videoplayer-current-time')) || 0;

    player.setCurrentTime(currentTime);
    





    
   