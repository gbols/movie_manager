class Movie {
  constructor(movieId,title,releaseDate){
    this.movieId = movieId;
    this.title = title;
    this.releaseDate = new Date(releaseDate); 
  }
  static add(entry){
    const newEntry = new Movie(entry.movieId,entry.title,entry.releaseDate);
    Movie.instances[newEntry.movieId] = newEntry;
    console.log(`entry with id ${newEntry.movieId} added`);

    }
  static retrieveAll(){
    let movieString;
    try {
      if (localStorage.getItem('movies')){
       movieString = localStorage.getItem('movies');
      }
    } catch (e){
      alert(`there was an error retreiving from local storage ${e}`);
    }
    if (movieString){
      const movies = JSON.parse(movieString);
      for (const key of Object.keys(movies)){
        this.add(movies[key]);
      } 
    }
  }
  static saveAll(){
    const movieString = JSON.stringify(Movie.instances);
    try {
      localStorage.setItem('movies',movieString);    } catch(e){
        alert("Error when writing to Local Storage\n" + e);
      }
  }
  static update(entry){
    let id = Movie.instances[entry.movieId];
    if ( id.title !== entry.title){
      id.title = entry.title;
    }
    if (id.releaseDate !== entry.releaseDate){
      id.releaseDate = entry.releaseDate;
    }

    console.log(`movie ${id.movieId} as been modified`);
  }
  static destroy(entryId){
    if (Movie.instances[entryId]){
      delete Movie.instances[entryId];
    } else {
      console.log(`the movie with id ${entryId} does not exit in te database`);
    }
  }
  static createTestData(){
    Movie.instances['1'] = new Movie('1','Pulp Fiction',new Date('1994 05 12'));
    Movie.instances['2'] = new Movie('2','Star Wars',new Date('1977 05 25'));
    Movie.instances['3'] = new Movie('3','Casablanca',new Date('1943 01 23'));
    Movie.instances['4'] = new Movie('4','The Godfather',new Date('1972 03 15'));

    Movie.saveAll();
  }
  static clearData(){
    if (confirm("Do you really want to clear the database?")){
      Movie.instances = {};
      localStorage.setItem('movies','{}');
    }
  }
}

Movie.instances = {};
