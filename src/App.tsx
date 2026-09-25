import { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Button</Button>
    </div>
  );
}

export default App;
