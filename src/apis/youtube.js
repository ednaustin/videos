import axios from 'axios';

const KEY = 'AIzaSyAs7Ubggcbh1qpenA_dDIEm88cP_mJGCrM';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
