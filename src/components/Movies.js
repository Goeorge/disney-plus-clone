import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
	const movies = useSelector(selectMovies);
	// console.log(movies);

	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				{movies &&
					movies.map((movie) => (
						<Wrap key={movie.imdb_id}>
							<Link to={`/detail/${movie.imdb_id}`}>
								<img src={movie.cardImg} alt="movie-clip" />
							</Link>
						</Wrap>
					))}
			</Content>
		</Container>
	);
}

export default Movies;

const Container = styled.div`
	background-color: ;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-gap: 2rem;
`;

const Wrap = styled.div`
	border-radius: 0.8rem;
	overflow: hidden;
	cursor: pointer;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0/ 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		border-color: rgba(249, 249, 249, 0.8);
	}
`;