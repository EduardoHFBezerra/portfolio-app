import styled from "styled-components";

type ContainerProps = {
    isOpen: boolean;
}

export const Container = styled.div(({ isOpen }: ContainerProps) => (`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    z-index: 9997;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;
    transition: 0.5s;

    @media (max-width: 992px) {
        left: -300px;

        ~ #main {
            margin-left: 0 !important;
        }
    }
    
    &.active {
        left: 0;
    }

    .profile img {
        margin: 15px auto;
        display: block;
        width: 120px;
        border: 8px solid #2c2f3f;
    }

    .profile h1 {
        font-size: 24px;
        margin: 0;
        padding: 0;
        font-weight: 600;
        -moz-text-align-last: center;
        text-align-last: center;
        font-family: "Poppins", sans-serif;
    }

    .profile .social-links a {
        font-size: 18px;
        display: inline-block;
        background: #212431;
        color: #fff;
        line-height: 1;
        padding: 8px 0;
        margin-right: 4px;
        border-radius: 50%;
        text-align: center;
        width: 36px;
        height: 36px;
        transition: 0.3s;
    }

    .profile .social-links a:hover {
        background: #149ddd;
        color: #fff;
        text-decoration: none;
    }

    .navbar {
        padding: 30px 0 0 0;
    }
      
    .nav-link {
        color: #a8a9b4;
        padding: 12px 15px;
        margin-bottom: 8px;
        align-items: center;
        display: flex;
        transition: 0.3s;
        line-height: 28px;
        font-size: 18px;
    }
      
    .nav-link svg {
        font-size: 28px;
        padding-right: 8px;
        color: #6f7180;
    }

    .nav-link.active, .nav-link:hover {
        color: #fff;
    }

    .nav-link.active svg, .nav-link:hover svg {
        color: #149ddd;
    }

    ~ #main {
        margin-left: ${isOpen ? '0': '300px'};
        transition: 0.5s;
    }
    `
));