ml.v.deleteMovie = {
  setupUserInterface(){
    const form = document.forms['deleted'];
    Movie.retrieveAll();

    const selectEl = form['selected'];
    
    for (const key of Object.keys(Movie.instances)){
      const option = document.createElement('option');
      option.value = Movie.instances[key].movieId;
      option.text = Movie.instances[key].title;
      selectEl.appendChild(option);
    }
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      Movie.destroy(selectEl.value);
      selectEl.remove(selectEl.selectedIndex);
    });

    window.addEventListener("beforeunload", Movie.saveAll);
  }
}