import "./Footer.css"
function Footer({email , name, year}) {
    return (
        <footer className="status-bar">
            <p className="status-right" >© {year} {name} Portfolio</p>
            <p>Contact: {email}</p>
        </footer>
    );
}

export default Footer;