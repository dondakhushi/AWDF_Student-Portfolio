function Header({ name , themeColor }) {
  return (
    <header style={{ backgroundColor: themeColor }}>
      <h1>Student Portfolio</h1>
      <p>Welcome to {name}'s portfolio!</p>
    </header>
  );
}

export default Header;
