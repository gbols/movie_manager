 ml.v.retreiveAndListMovie = {
  setupUserInterface(){
    const tableBodyEl = document.querySelector('table#movies>tbody');
    Movie.retrieveAll();
    let row;

    for (const key of Object.keys(Movie.instances)){
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Movie.instances[key].movieId;
      row.insertCell(-1).textContent = Movie.instances[key].title;
      row.insertCell(-1).textContent = Movie.instances[key].releaseDate;
    }
   }
 }