import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovie } from "../services/movieService";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState();

	useEffect(() => {
		setMovie(getMovie(id));
	}, [id]);

	console.log(movie);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.background} alt="movie-wallpaper" />
					</Background>
					<ImgTitle>
						<img src={movie.imgtitle} alt="movie-title" />
					</ImgTitle>
					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="movie-title" />
							<span>Play</span>
						</PlayButton>
						<TrailerButton>
							<img src="/images/play-icon-white.png" alt="movie-title" />
							<span>Trailer</span>
						</TrailerButton>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatch>
							<img src="/images/group-icon.png" alt="movie-title" />
						</GroupWatch>
					</Controls>
					<SubTitle> {movie.subtitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	height: calc(100vh - 60px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity:0.98;

	img{
		height:100%
		width:100%
		object-fit:cover;
	}
`;

const ImgTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 30vw;
	min-width: 170px;
	margin-top: 40px;

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;
const Controls = styled.div`
	display: flex;
	align-items: center;
	margin-left: 64px;
	margin-top: 40px;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	border: none;
	padding: 0 24px;
	margin-right: 22px;
	cursor: pointer;
	letter-spacing: 1.8px;
	background: rgb(249, 249, 249);
	text-transform: uppercase;

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgb(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
	height: 44px;
	width: 44px;
	margin-right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	span {
		font-size: 30px;
		color: white;
	}
`;
const GroupWatch = styled(AddButton)`
	background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	margin-top: 26px;
	min-height: 20px;
	margin-left: 64px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 18px;
	margin-left: 64px;
	padding-right: 50%;
	margin-top: 18px;
`;
