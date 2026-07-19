import "./About.css"
function About({heading , description}){
    return (
        <section className="status">
            <h2 className="title">{heading}</h2>
            <p className="pTag" >  {description}</p>
        </section>
    );
}

export default About;