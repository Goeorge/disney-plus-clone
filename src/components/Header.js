import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a href="#">
					<img src="/images/home-icon.svg"></img>
					<span>HOME</span>
				</a>
				<a href="#">
					<img src="/images/search-icon.svg"></img>
					<span>SEARCH</span>
				</a>
				<a href="#">
					<img src="/images/watchlist-icon.svg"></img>
					<span>WATCHLIST</span>
				</a>
				<a href="#">
					<img src="/images/original-icon.svg"></img>
					<span>ORIGINALS</span>
				</a>
				<a href="#">
					<img src="/images/movie-icon.svg"></img>
					<span>MOVIES</span>
				</a>
				<a href="#">
					<img src="/images/series-icon.svg"></img>
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src="/images/profile.jpg" alt="user-profile-image" />
		</Nav>
	);
}

export default Header;

const Nav = styled.div`
	height: 60px;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	align-items: center;
	padding: 0 3.6rem;
	background-color: #090b13;

	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 4.8rem;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 1.2rem;
		cursor: pointer;

		&:hover {
			span:after {
				opacity: 1;
				transform: scaleX(1);
			}
		}
	}

	img {
		height: 18px;
	}
	span {
		font-size: 0.8rem;
		letter-spacing: 1.42px;
		color: white;
		text-tranform: uppercase;
		position: relative;

		&:after {
			content: "";
			background: white;
			position: absolute;
			height: 2px;
			left: 0;
			right: 0;
			bottom: -6px;
			opacity: 0;
			transform-origin: left center;
			transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			transform: scaleX(0);
		}
	}
`;

const UserImg = styled.img`
	height: 46px;
	width: 46px;
	border-radius: 50%;
	cursor: pointer;
`;
