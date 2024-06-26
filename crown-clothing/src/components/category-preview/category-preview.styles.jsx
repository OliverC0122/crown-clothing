import styled from "styled-components";

import { Link } from "react-router-dom";

export const TitleContainer = styled(Link)`
    font-size: 28px; 
    margin-bottom: 25px; 
    cursor: pointer; 
    display: inline-block;
    text-decoration: none; // Remove underline
    transition: color 0.3s ease, text-shadow 0.3s ease; // Smooth transitions

    &:hover {
        color: #0056b3; // Change color on hover
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); // Add a shadow on hover
    }

    &:focus {
        outline: none; // Remove the default outline
        color: #003d80; // Change color on focus
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); // Add a shadow on focus
    }

    &:hover::after,
    &:focus::after {
        transform: translateX(0.2em); // Move the arrow on hover and focus
    }
`

export const Preview = styled.div`
    display: grid; 
    grid-template-columns: 
    repeat(4, 1fr); 
    column-gap: 20px; 
`

export const CategoryPreviewContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-bottom: 30px; 
`
