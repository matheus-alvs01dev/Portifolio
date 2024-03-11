import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-image: ${(props) => props.theme.colors.gradientBg};
}

section {
	max-width: 1200px;
	padding-top: 10rem;
	padding-bottom: 10rem;
}

ol, ul {
	list-style: none;
}

h1{
	color: ${(props) => props.theme.colors.white};
	font-family: "montserrat", sans-serif;
	font-size: 4rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: uppercase;
	text-align: center;

	@media (max-width:480px){
		font-size: 3rem;
		
	}
}

h2{
	font-family: "montserrat", sans-serif;
	font-weight: 500;
	font-size: 3rem;
	color:${(props) => props.theme.colors.white};

	@media (max-width: 375px) {
		font-size: 2rem;	
	}
	
}

p{
	font-family: "roboto", sans-serif;
	color:${(props) => props.theme.colors.white};
	font-size: 1.2rem;
	font-weight: 300;
	line-height: 1.2rem;

	@media (max-width: 375px) {
		font-size: 1rem;
		
	}
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyles;
