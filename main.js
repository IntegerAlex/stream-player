import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'
// import axios from 'axios';
  const audioPlayer = document.getElementById('audioPlayer');
  const audioUrl = 'https://xstreambackend.com/stream?id=test';

  // Make a range request to stream a specific portion of the file
  
  // Adding event listener to the search button
document.getElementById("searchButton").addEventListener("click", search);


// Search function
export function search() {
  let query = document.getElementById("searchInput");
  console.log(query.value);

  if (query.value !== "") {
    axios.post('https://xstreambackend.com/search?searchQuery=' + query.value + '&id=test')
    
    
    .then(response => {
      // Handle the response as needed
    })
    .catch(error => {
      console.error('Search error:', error);
    });

    setTimeout(stream, 10000);
  }
}
  
  // stream function
export function stream() {
  axios.get(audioUrl, {
    headers: { 'Range': 'bytes=0-' },
    responseType: 'blob'
  })
  .then(response => {
    const blobUrl = URL.createObjectURL(response.data);
    audioPlayer.src = blobUrl;
  })
  .catch(error => console.error('Axios error:', error));
}
  



// Path: stream%20player/main.js