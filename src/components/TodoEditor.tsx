import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

type TTodoEditorProps = {
  addTodo: (text: string) => void;
};
const TodoEditor = (props: TTodoEditorProps) => {
  const { addTodo } = props;
  // console.log(`todoEditor : ${addTodo}`);

  const [text, setText] = useState("");
  // onChangeHandler >>> useCallback해도 text 때문에 메모이제이션 불가능
  // 이러면 input컴포에 메모 쓰면 성능 낭비
  // input컴포랑 아래 온체인지 다 메모이제이션 지우기
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <>
      <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter Your Todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" style={"w-[77px] bg-[#4F4F4F] text-white"}>
          Add
        </Button>
      </form>
    </>
  );
};
export default TodoEditor;
