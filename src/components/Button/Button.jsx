import style from "./Button.module.scss";

const Button = ({ text }) => {
  return <div className={style.container}>{text}</div>;
};

export default Button;
