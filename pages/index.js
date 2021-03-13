import Link from "next/link";

const index = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default index;
