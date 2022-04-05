import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" alt="logo one" />
				<Signup>GET ALL HERE</Signup>
				<Description>
					Get Premier Access to Raya and the Last Dragon for an with Disney+
					subscription. As of 02/36/22, the price and The Disney bundle will
					increase by $1.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" alt="logo one" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 60px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("/images/login-background.jpg");
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.7;
		z-index: -1;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60px;
`;

const CTALogoOne = styled.img``;

const Signup = styled.a`
	width: 100%;
	background-color: #0063e5;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1.5px;
	cursor: pointer;
	transition: all 250ms;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
