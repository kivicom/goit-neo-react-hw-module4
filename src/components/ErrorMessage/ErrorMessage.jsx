import style from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div>
      <p className={style.error}>
        Oops, something went wrong, please, try again later
      </p>
    </div>
  );
}
