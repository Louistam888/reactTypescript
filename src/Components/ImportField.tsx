import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const ImportField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default ImportField;
