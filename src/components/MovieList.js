import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const movies = props.movies || [];
	return (
		<>
			{movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index}>
					<img src={movie.Poster} alt='movie'></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)} 
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavouriteComponent />
					</div>  
				</div>
			))}
		</>
	);
};

export default MovieList;