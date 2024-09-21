import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --red:#e52e4d;
    --green: #33cc95;
    --blue:#5929cc;
    --bluelight:#6933ff;
    --text-title:#363f5f;
    --text-body:#969CB3;
    --background:#f0f2f5;
    --shape:#ffffff;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    @media (max-width: 1000px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 83.75%;
    }
}


body{
    background: var(--background);
    -webkit-font-smoothing: antialiased
};

border-style, :-ms-input-placeholder, textarea, input{
    font-family: 'Poppings', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;

}

button{
    cursor: pointer;

}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;

}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased
}`;
