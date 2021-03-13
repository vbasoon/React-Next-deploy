import Link from "next/link";

const index = () => {
  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/users">
          <a className="link">Users</a>
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
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default index;
