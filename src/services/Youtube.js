import axios from 'axios';
const KEY = 'AIzaSyCB2D3Ja22AQEifomK-4C6IHOMpqFHTK3c'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})