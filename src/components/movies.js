import React from 'react'
import * as S from './styles/movies'

function Movies({ resultsTitle, movies, displayInfo, base_poster_url }) {
    
    return (
        <>
            <S.ResultsTitle>{resultsTitle}</S.ResultsTitle>
            <S.Grid>
                {movies.length ? movies.map(movie => (
                    <S.Movie 
                        key={movie.id}
                        onClick={() => displayInfo(movie)} >
                        <S.RatingContainer>
                            <S.Rating rating={movie.vote_average}>
                                {movie.vote_average}
                            </S.Rating>
                        </S.RatingContainer>
                        <S.Poster img={base_poster_url + movie.poster_path}/>
                        <S.Title>
                            {movie.title}
                        </S.Title>
                    </S.Movie>
                )) : <S.NoResults>No results found</S.NoResults>}
            </S.Grid>
        </>
    )
}

export default Movies
