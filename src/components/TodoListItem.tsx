import React from "react";
import Checkbox from "./html/Checkbox";
import { TTodo } from "./Todo";
interface TodoListItemProps {
  todo: TTodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoListItem = ({ todo, onToggle, onDelete }: TodoListItemProps) => {
  console.log("todolistitem render"); // 리스트 매번 다 재렌더링됨 오바네
  /*
  1. 일단 이 컴포넌트 메모이제이션 react.memo
  2. 여기로 넘어오는 props 점검, 3개 todo 토글 삭제, todo는 제외, 투두리스트에서 이미 가진 객체
  키라는 속성은 내부적으로 메모를 시행함 todo는 메모를 하지 않아도 이미 알아서 이전과 같았으면 메모를 알아서 했을 것
  3. 토글과 삭제를 메모하자
  */
  return (
    <>
      <li className="flex justify-between items-center py-[10px] px-[15px] bg-[rgba(53,56,62,0.05)] border border-[#4f4f4f] rounded-[4px]">
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}>
          <span
            className={`${todo.completed && "line-through"} text-[#35383E]`}
          >
            {todo.text}
          </span>
        </Checkbox>
        <button
          onClick={() => onDelete(todo.id)}
          className="w-6 h-6 bg-[rgba(53,56,62,0.1)] border border-[#4F4F4F] rounded flex items-center justify-center"
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
            <path
              d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
      </li>
    </>
  );
};
export default React.memo(TodoListItem);
