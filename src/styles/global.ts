import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root{
            --background: #FFF;
            --darker: #333;
            --primary: #969696;
            --secondary: #E29933;
            --lighter: #D9D9D9;
            --attention: #C91423;
                  
        }

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        // font-size:16px (Desktop)

        html{
            @media(max-width: 1080px){
                font-size: 93.75%;//15px
            }

            @media (max-width: 720px){
                font-size: 87.5%;//14px
            } 

            @media (max-width: 640px){
                font-size: 75%;//12px
            }
        }


        body {
            background: var(--background);
            -webkit-font-smoothing: antialiased;
        }

        body, input, textarea, button {
            font-family: 'Libre Franklin', sans-serif;

            font-weight: 400;
        }

        h1, h2, h3, h4, h5, h6, strong {
            font-weight: 600;
        }

        button{
            cursor: pointer;
        }

        [disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

       
        

    `;
