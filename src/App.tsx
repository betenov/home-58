import React, {useState} from 'react';
import Player from "./components/Player/Player";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Alert/Alert";


function App() {
  const [showAlert, setShowAlert] = useState(true)
  const closeAlert = () => {
    setShowAlert(false)
  }
const [showAlert2 , setShowAlert2] = useState(true)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="m-auto">
        <Player/>
      </main>
      <div>
        <Alert type={"alert alert-warning"} showAlert={showAlert} onDismiss={closeAlert}>
          This is a warning alert—check it out!
          <button type="button" className="btn-close ms-5" aria-label ="Close" onClick={closeAlert}></button>
        </Alert>
        <Alert type={"alert alert-success"} showAlert={showAlert2} onDismiss={closeAlert} >
          This is a success alert—check it out!
        </Alert>
      </div>
    </>
  );
}

export default App;
