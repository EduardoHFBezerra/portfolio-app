import styled from "styled-components";

export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;

    .mobile-nav-toggle {
        position: fixed;
        right: 15px;
        top: 15px;
        z-index: 9998;
        border: 0;
        padding: 10px;
        transition: width 0.3s ease-in-out;
        outline: none !important;
        background-color: #149ddd;
        color: #fff;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        border-radius: 50px;
        cursor: pointer;
    }
      
    section {
        padding: 60px 0;
        overflow: hidden;
    }
`;