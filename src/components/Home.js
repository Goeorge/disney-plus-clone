import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import { getMovies } from "../services/movieService";
import Viewers from "./Viewers";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
// import api from "../api";

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		let moviesData = getMovies();

		//AXIO to fetch Data from an API, uses api import

		// let trendingMovies = api
		// 	.getData()
		// 	.then((response) => {
		// 		responseData = response.data;
		// 		console.log(responseData);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// console.log(moviesData);
		dispatch(setMovies(moviesData));
	}, []);

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
		</Container>
	);
}

export default Home;

const Container = styled.main`
	height: calc(100vh - 60px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&:before {
		background: url("/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
