import { useState } from 'react';
import Modal from './Modal';
import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
    const [isOpen, setIsOpen] = useState(false);

    

    const dispatch = useDispatch();

    const toggleIsdone = () => {
        const updated = {...todo, is_done: !todo.is_done };
        dispatch({
            type:"UPDATE",
            payload: updated,
        });
    }; 
  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
      <p>{todo.creared_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} 
      className="btn btn-primary">Düzenle</button>

      <button onClick={toggleIsdone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamlandı"} 
        </button>

      <button onClick={() => dispatch ({
          type:"DELETE",
          payload: todo.id,
      })} 
    className="btn btn-danger">Sil</button>

    {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
