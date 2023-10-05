import create from "zustand";

export const useStore = create((set, get) => ({
  selectedDate: null,
  date: new Date(),
  modalIsOpen: false,
  inputValue: "",
  todos: [],
  prevDateEl: null,

  setPrevDateEl: (el) => set({ prevDateEl: el }),

  setSelectedDate: (date) => set({ selectedDate: date }),
  setDate: (date) => set({ date }),

  // 모달 열기 함수
  modalOpen: () => {
    set((state) => ({
      ...state,
      inputValue: "",
      modalIsOpen: true,
    }));
  },

  // 모달 닫기 함수
  closeModal: () => {
    set((state) => ({
      ...state,
      modalIsOpen: false,
    }));
  },

  setInputValue: (value) => set({ inputValue: value }),

  registerTodo: () => {
    let { inputValue, todos, selectedDate } = get();
    if (inputValue) {
      const newTodo = { date: selectedDate, todoContent: inputValue };
      set({ todos: [...todos, newTodo] });
      console.log(todos);
    } else {
      console.log("할일이 입력되지 않았습니다.");
    }
    return get().inputValue;
  },
}));
