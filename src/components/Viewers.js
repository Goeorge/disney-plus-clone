import React from "react";
import styled from "styled-components";

function Viewers() {
	return (
		<Container>
			<Wrap>
				<img src="/images/viewers-disney.png" alt="viewers category" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-marvel.png" alt="viewers category" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-national.png" alt="viewers category" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-pixar.png" alt="viewers category" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-starwars.png" alt="viewers category" />
			</Wrap>
		</Container>
	);
}

export default Viewers;

const Container = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 3rem;
	padding: 3rem 0 2.6rem;
`;

const Wrap = styled.div`
	cursor: pointer;
	border-radius: 0.8rem;
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
			rgb(0 0 0/ 73%) 0px 30px 22px -10px;
		border: 3px solid rgba(249, 249, 249, 0.8);
	}
`;
