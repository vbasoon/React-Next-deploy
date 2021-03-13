import A from "../components/A";
import styles from "../styles/nav.module.scss";

const index = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <A href={"/"} text="Головна" />
        <A href={"/users"} text="Користувачі" />
      </div>
      <h1>Home Page</h1>
      <style jsx>{``}</style>
    </div>
  );
};

export default index;
