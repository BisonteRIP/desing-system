import "./App.css";
import "./index.css";
import Button from "./components/ui/button";

function App() {
  return (
    <>
      <Button variant="destructive">hola como estas</Button>
      <Button variant="">hola como estas</Button>
      <Button variant="outline">hola como estas</Button>
      <Button variant="ghost">hola como estas</Button>
    </>
  );
}

export default App;
