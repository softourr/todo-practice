// import { useMemo } from "react";
import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TTodoListProps = {
  todos: TTodo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};
const TodoList = (props: TTodoListProps) => {
  const { todos, onToggle, onDelete } = props;
  // 3 토글 삭제 메모, usememo방법,,왜안돼
  // const memoToggle = useMemo(() => onToggle, []);
  // const memoDelete = useMemo(() => onDelete, []);
  // console.log(onToggle);
  // console.log(memoToggle);

  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            // onToggle={memoToggle}
            // onDelete={memoDelete}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
