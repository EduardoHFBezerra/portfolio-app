import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;

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

    .nav-menu {
        padding: 30px 0 0 0;
    }
      
    .nav-menu * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
      
    .nav-menu>ul>li {
        position: relative;
        white-space: nowrap;
    }
      
    .nav-menu a,
    .nav-menu a:focus {
        display: flex;
        align-items: center;
        color: #a8a9b4;
        padding: 12px 15px;
        margin-bottom: 8px;
        transition: 0.3s;
        font-size: 16px;
    }
      
    .nav-menu a svg,
    .nav-menu a:focus svg {
        font-size: 24px;
        padding-right: 8px;
        color: #6f7180;
    }
      
    .nav-menu a:hover,
    .nav-menu .active,
    .nav-menu .active:focus,
    .nav-menu li:hover>a {
        text-decoration: none;
        color: #fff;
    }
      
    .nav-menu a:hover svg,
    .nav-menu .active svg,
    .nav-menu .active:focus svg,
    .nav-menu li:hover>a svg {
        color: #149ddd;
    }
    `
;