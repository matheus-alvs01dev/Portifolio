import "styled-components"

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,

        colors: {
            lightPurple: string,
            purple: string,
            GradientBg: string,
            gray: string,
            white: string,
        }
    }
}