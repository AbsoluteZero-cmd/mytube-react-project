import axios from 'axios';

const KEY = 'AIzaSyBz3dxTtvE5mhPnpwx0BD3SdCxDPbpgLb8';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    },
});
