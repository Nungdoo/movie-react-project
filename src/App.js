import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(m => (
              <Movie
                key = {m.id}
                year = {m.year}
                title = {m.title}
                summary = {m.summary}
                poster = {m.medium_cover_image}
                genres = {m.genres}
              />
            ))}
         </div>
        )}
      </section>
    );
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  }
}

export default App;
