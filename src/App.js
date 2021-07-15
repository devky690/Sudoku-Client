import React, {useState} from "react";
import Board from "./components/board.js";
import Modal from './components/modal.js';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Board showModal = {showModal} setShowModal={setShowModal}> </Board>
      {showModal && <Modal> </Modal>}
    </div>
  );
}

export default App;
