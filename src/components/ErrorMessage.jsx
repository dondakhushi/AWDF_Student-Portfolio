import "./ErrorMessage.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong.</h2>

      <p>{message}</p>

      <button className="retry-btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;