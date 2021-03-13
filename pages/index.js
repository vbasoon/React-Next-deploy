import Link from "next/link";

const index = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="link" href="/">
          <a>Home</a>
        </Link>
        <Link className="link" href="/users">
          <a>Users</a>
        </Link>
      </div>
      <h1>Home Page</h1>
      <style jsx>{`
        .navbar {
          background: blue;
          padding: 10px;
        }
        .link {
          color: white;
          font-size: 20px;
          text-decoration: none;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default index;
