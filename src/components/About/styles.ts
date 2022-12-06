import styled from "styled-components";

export const Section = styled.section`
    color: #939393;

    h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;
    }

    h2:after {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 3px;
        background: #149ddd;
        bottom: 0;
        left: 0;
    }

    h2, h3 {
        color: #fff;
    }

    .content ul {
        list-style: none;
        padding: 0;
    }

    .content ul svg {
        font-size: 16px;
        margin-right: 5px;
        color: #149ddd;
        line-height: 0;
    }
`;