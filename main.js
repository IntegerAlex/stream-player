

  const audioPlayer = document.getElementById('audioPlayer');
  const audioUrl = 'https://35.244.24.37/stream?id=test';

  // Make a range request to stream a specific portion of the file
  
  // Adding event listener to the search button
document.getElementById("searchButton").addEventListener("click", search);


// Search function
export function search() {
  let query = document.getElementById("searchInput");
  console.log(query.value);

  if (query.value !== "") {
    fetch.post('https://35.244.24.37/search?searchQuery=' + query.value + '&id=test')
    
    
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
  fetch.get(audioUrl, {
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