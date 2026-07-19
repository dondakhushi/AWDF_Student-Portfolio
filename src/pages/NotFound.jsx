import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound() {
  return (
    <div className="pane not-found">
      <div className="code">404</div>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">← Back to Home.jsx</Link>
    </div>
  );
}

export default NotFound;