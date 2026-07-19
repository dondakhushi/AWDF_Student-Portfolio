import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import PortfolioData from "../Data/PortfolioData";
import "./Home.css"

function Home()
{
    return(
        <>
            <About
                heading={PortfolioData.about.heading}
                description={PortfolioData.about.description}
            />
            <Skills 
                heading={PortfolioData.skills.heading}
                skillsList={PortfolioData.skills.skillsList}
            />
        </>
    );
}

export default Home;


