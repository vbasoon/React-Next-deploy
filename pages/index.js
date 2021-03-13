import A from "../components/A";

const index = () => {
  return (
    <div>
      <div className="navbar">
        <A href={"/"} text="Головна" />
        <A href={"/users"} text="Користувачі" />
      </div>
      <h1>Home Page</h1>
      <style jsx>{`
        .navbar {
          background: blue;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default index;
