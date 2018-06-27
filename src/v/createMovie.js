/***********************************************
***  Methods for the use case createBook  ******
************************************************/
ml.v.createMovie = {
  setupUserInterface: function () {
    var saveButton = document.forms['newMovie'];
    // load all book objects
     Movie.retrieveAll();
    // set an event handler for the submit/save button
    saveButton.addEventListener("submit", 
        ml.v.createMovie.handleSaveButtonClickEvent);
    // set a handler for the event when the browser window/tab is closed
    window.addEventListener("beforeunload", Movie.saveAll);
  },
  // save user input data
  handleSaveButtonClickEvent: function (e) {
    e.preventDefault();
    var formEl = document.forms['newMovie'];
    var slots = { movieId: formEl.movieId.value, 
        title: formEl.title.value, 
        releaseDate: new Date(formEl.myDate.value)};
        console.log(formEl.myDate.value);
    Movie.add( slots);
    formEl.reset();
  }
};