import "./Header.css"
function Header({name}){
    return(
        <header className="titlebar">
             <h1 className="filename" >Welcome to {name}'s portfolio!</h1>
        </header>
    );
}

export default Header;