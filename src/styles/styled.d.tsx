import "styled-components"

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,

        sizes:{
            borderRadius: string,
            borderSolid: string,
            boxShadow: string,
            
        }

        colors: {
            lightPurple: string,
            purple: string,
            gradientBg: string,
            gray: string,
            white: string,
            purpleGradient:string,
            footerBackground: string,
        }
    }
}