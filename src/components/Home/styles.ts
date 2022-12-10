import styled from "styled-components";
import image from "../../assets/images/photo.png";
import { keyframes } from "styled-components";

export const Section = styled.section`
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    background: url(${image}) top center;
    background-size: cover;

    :before {
        content: "";
        background: rgba(5, 13, 24, 0.3);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .home-container {
        position: relative;
        z-index: 2;
        min-width: 300px;
    }

    h1 {
        margin: 0 0 10px 0;
        font-size: 64px;
        font-weight: 700;
        line-height: 56px;
        color: #fff;
    }

    p {
        color: #fff;
        margin-bottom: 50px;
        font-size: 26px;
        font-family: "Poppins", sans-serif;
    }

    p span {
        color: #fff;
        padding-bottom: 4px;
        letter-spacing: 1px;
        border-bottom: 3px solid #149ddd;
    }

    @media (min-width: 1024px) {
        background-attachment: fixed;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 34px;
            line-height: 36px;
        }

        p {
            font-size: 18px;
        }
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const FadeIn = styled.div`
    animation: ${fadeIn} 1.5s ease-in-out;
    animation-duration: 1s;
    animation-fill-mode: both;
`;