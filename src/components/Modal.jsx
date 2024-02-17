import { useDispatch } from "react-redux";

const Modal = ({ close, todo }) => { 
   const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[1].value;

        const updated = {...todo, text: text };

        dispatch({ type: 'UPDATE', payload: updated });

        close();
    };

    return (
        <div className="modal d-block bg-black bg-opacity-50 text-dark">
          <div className="modal-dialog modal-dialog-centered">
            <form onSubmit={handleSubmit} className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Todo'yu Güncelle</h1>
                <button
                  onClick={close}
                  type="button"
                  className="btn-close"
                ></button>
              </div>
    
              <div className="modal-body">
                <label>Yeni Başlık</label>
                <input
                  defaultValue={todo.text}
                  className="form-control shadow mt-2"
                  type="text"/>
              </div>
    
              <div className="modal-footer">
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-secondary">
                  İptal
                </button>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

  


export default Modal;
