import React, {useState} from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      document.body.classList.remove("red");
      document.body.classList.remove("blue");
      setMode("dark");
      document.body.style.background = "#222";
      showAlert("Dark Mode has been enabled !", "success");
    } else {
      document.body.classList.remove("red");
      document.body.classList.remove("blue");
      setMode("light");
      document.body.style.background = "#fff";
      showAlert("Light Mode has been enabled !", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Here..."
                mode={mode}
              />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
};

export default App;
