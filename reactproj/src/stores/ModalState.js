import { create } from 'zustand'

// const useModalState = create((set) => ({
//     todos: [],
//     modalIsOpen: false,
//     inputValue: '',  
//     registerTodo: (inputValue, setModalIsOpen, todos) => { 
//       if (inputValue) {
//         set((state) => ({
//           ...state,
//           todos: [...state.todos, inputValue],
//           modalIsOpen: false,
//         }));
//         console.log(todos);  
//       } else {
//         console.log("입력요망");
//       }
//     },
//   }));
  
  
  export default useModalState; 