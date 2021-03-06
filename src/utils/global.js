import { createGlobalStyle } from "styled-components"
// import logo from "../images/backgroundPhoto.png"
// import logo from "../images/backgroundPhoto.png"
// import logoSketch from "../images/sketch.svg"
export default createGlobalStyle`
html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }
      @media ${props => props.theme.mediaQueries.large} {
        font-size: 57.5%;
      }
      @media ${props => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
    }

		* {
      outline: none;
      box-sizing: inherit;
      ${"" /* -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important; */}
    }
		*,
    *::before,
    *::after {
      box-sizing: inherit;
      ${
        "" /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; */
      }
    }


	body {
		font-family: 'Poppins', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
		margin:0;
		width: 100%;
    height: 100%;
		overflow: visible;
    background-image: ${props => props.theme.colors.bgGradient}
	}
`

// console.log(`THERE IS THE LOGO ${logo}`)
// console.log(`THERE IS THE LOGO ${logoSketch}`)
