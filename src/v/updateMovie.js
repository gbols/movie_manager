ml.v.updatetMovie = {
  setupUserInterface(){
    const form = document.forms['updated'];
    Movie.retrieveAll();
    selectEl = form['selected'];
    let option;
    for (const key of Object.keys(Movie.instances)){
      option = document.createElement('option');
      option.text = Movie.instances[key].title;
      option.value = Movie.instances[key].movieId;
      selectEl.appendChild(option);
    }
    selectEl.addEventListener('change', (e)=>{
      const key = selectEl.value;
      if (key) {
      form.id.value = Movie.instances[key].movieId;
      form.title.value = Movie.instances[key].title;
      form.date.value = Movie.instances[key].releaseDate;
      } else form.reset();
    });
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const entry = {
        movieId : form.id.value,
        title : form.title.value,
        releaseDate : form.date.value
      }
        Movie.update(entry);
      form.reset();
    });

    window.addEventListener("beforeunload", Movie.saveAll);
  }
  
}