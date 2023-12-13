import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'
// import axios from 'axios';
  const audioPlayer = document.getElementById('audioPlayer');
  let id = localStorage.getItem("id")
  const audioUrl = `https://xstreambackend.com/stream?id=${id}`;
 
  // Make a range request to stream a specific portion of the file
  
  // Adding event listener to the search button
let btn = document.getElementById("searchButton").addEventListener("click", search);


// Search function
export function search() {
  let query = document.getElementById("searchInput");
  console.log(query.value);

  
  console.log(id);
  if(id == null || id == undefined){
    id = "test"
  }
  startSearch();
  // document.getElementById("searchInput").disabled = true;
  if (query.value !== "") {
    axios.post('https://xstreambackend.com/search?searchQuery=' + query.value + `&id=${id}`)
    
    
    .then(response => {
      // Handle the response as needed
    })
    .catch(error => {
      console.error('Search error:', error);
    });
    // time();
    // function time(){
    //   if (btn) {
    //     btn.hidden = true;
    //   } else {
    //     console.error("Button not found.");
    //   }
    setTimeout(stream, 7000);
      // btn.hidden = false;
    // }
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







let searchInProgress = false;
async function startSearch() {

 
  let counter = 0;
  let progressInterval;
  
  // Simulate the start of a search process
  searchInProgress = true;

  // Show the progress bar
  document.getElementById("progress-bar").style.width = "0";
  document.getElementById("progress-bar").innerHTML = "0%";
  document.querySelector(".progress-container").style.display = "block";

  // Simulate search progress for 10 seconds
  const duration = 10000; // 10 seconds in milliseconds
  const interval = 50; // Update every 50 milliseconds
  const steps = duration / interval;

  progressInterval = setInterval(() => {
    if (counter >= 100 || counter >= steps) {
      clearInterval(progressInterval);
      // Hide the progress bar when the search is complete
      document.querySelector(".progress-container").style.display = "none";
      searchInProgress = false;
    } else {
      counter++;
      document.getElementById("progress-bar").style.width = (counter / steps * 100) + "%";
      document.getElementById("progress-bar").innerHTML = Math.round((counter / steps * 100)) + "%";
    }
  }, interval);
}
