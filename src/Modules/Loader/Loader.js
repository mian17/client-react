import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes["section-loading"]}>
      <ul className={classes["list-bars"]}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
export default Loader;
