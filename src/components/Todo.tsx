import { useCallback, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  // 등록
  // 4 굳이 usecallback 안해도됨
  const addTodo = (text: string) => {
    // console.log(`todo.tsx : ${text}`);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text, completed: false },
    ]);
  };

  // Toggle
  //메모추가
  const toggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);
  // Delete
  const deleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => {
      // 현재 삭제 요청된 todo.id를 제외한 나머지만 남도록 필터링한다
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  }, []);

  return (
    <>
      <div className="w-[375px] bg-white rounded-lg py-10 px-6 text-[#4b4b4b] todo-bg">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor addTodo={addTodo} />
        {/* 리스트 */}
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
};
export default Todo;
