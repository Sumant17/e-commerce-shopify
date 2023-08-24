import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            Page Not Found.Go to{""}{" "}
            <Link to="/" replace>
              {" "}
              homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
