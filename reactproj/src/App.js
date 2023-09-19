import Calendar from "./components/Calendar.js";
import Work from "./components/Work.js";
import "./App.css";
import Button from "./components/Button";
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

function App() {
  //날짜, 시간 상태
  const [date, setDate] = useState(new Date())

  //모달 관리 상태
  const [modalIsOpen, setModalIsOpen] = useState(false)

  //모달창 input값으로 입력받은 할일을 관리하는 상태
  const [inputValue, setInputValue] = useState("")


  //입력받은 할일을 관리하는 배열 상태
  const [todos, setTodos] = useState([])



  //추가 버튼을 누르면 배열에 input을 통해 입력받은 값을 저장하는 함수
  const registerTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue])
      setModalIsOpen(false)
      console.log(todos) //삭제할 내용
    } else {
      console.log("할일이 입력되지 않았습니다.")
    }
  }

  //모달 여는 함수
  const modalOpen = () => {
    setInputValue("")
    setModalIsOpen(true)
  }

  //모달 닫는 함수
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="App">
      <Button modalOpen={modalOpen} />
      <Calendar />
      <Work />
    </div>
  );
}

export default App;
