import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <div className={styles.user}>
      <h1>User ID {query.id}</h1>
      <div>User name - {user.name}</div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
