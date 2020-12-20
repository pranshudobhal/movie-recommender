import React, { useState } from "react";
import "./styles.css";

var recomendations = {
  action: [
    {
      title: "Black Panther",
      rating: 4.75
    },
    {
      title: "Avengers: Endgame",
      rating: 4.5
    },
    {
      title: "Mission Impossible",
      rating: 4.25
    }
  ],
  comedy: [
    {
      title: "Toy Story 4",
      rating: 4.5
    },
    {
      title: "Coco",
      rating: 4.5
    },
    {
      title: "Zootopia",
      rating: 4
    }
  ],
  thriller: [
    {
      title: "The Dark Knight",
      rating: 4.75
    },
    {
      title: "Inception",
      rating: 4.5
    },
    {
      title: "Parasite",
      rating: 4.5
    }
  ]
};

var genreList = Object.keys(recomendations);

export default function App() {
  const [movie, showMovie] = useState("action");

  function showMovieSuggestion(event) {
    var recommendedGenre = event.target.innerText;
    showMovie(recommendedGenre);
  }

  return (
    <div className="App">
      <h1>Movie Recommender</h1>
      <div>
        Struggling with finding perfect movie to watch. Select a genre to and
        discover awesome movies
      </div>
      {genreList.map((genre, index) => {
        return (
          <button key={index} onClick={showMovieSuggestion}>
            {genre}
          </button>
        );
      })}
      <ul>
        {recomendations[movie].map((genre, index) => {
          return (
            <li key={index}>
              <p id="movie-title">{genre.title}</p>
              <p id="movie-rating">{genre.rating}/5</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
