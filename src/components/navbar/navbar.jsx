import React,{ useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../navbar/Navbar.css";
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme,GlobalStyles } from './themes';

const styledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


const Navbar = () => {
    // const path = window.location.pathname
    const [theme,setTheme] = useState("light");

    const themeToggler = () =>{
      theme == "light" ? setTheme("dark") : setTheme("light");
    };

    return(
        <nav className="nav">
            <div className="site-title">
            <Link to="/">SITE</Link>
            </div>
            <ul>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/projects">Projects</CustomLink>
            </li>
            <li>
                <CustomLink to="/contact">Contact </CustomLink>
            </li>
            <li>
            <ThemeProvider theme={theme== "light"? lightTheme : darkTheme}>
                <GlobalStyles />
                <styledApp>
                     <button className="theme" onClick={() => themeToggler()}>Change Theme</button>      
                </styledApp>
            </ThemeProvider>
            </li>
            </ul>
        </nav>
    )
};

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname,end: true})

    return(
        <li className={isActive? "active" : ""}>
            <Link to = {to}{...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;