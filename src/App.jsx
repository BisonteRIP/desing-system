import "./App.css";
import "./index.css";
import Button from "./components/ui/button";
import Badges from "./components/ui/badges";
import Input from "./components/ui/input";
import {
  ComponentExample,
  ComponentSection,
} from "./components/ComponentSection";

function App() {
  return (
    <>
      <ComponentSection
        title="Botones"
        description="Presentacion de todos los botones">
        <ComponentExample
          title="Diferentes Botones"
          description="Algunos Botones">
          <Button variant="destructive">hola como estas</Button>
          <Button>hola como estas</Button>
          <Button variant="outline">hola como estas</Button>
          <Button variant="ghost">hola como estas</Button>
          <Badges variant="outline">
            <p>99+</p>
          </Badges>
          <Input
            showIcon={false}
            icon="lock"
            type="text"
            placeholder="Escribe aqui..."
            style="success"></Input>
        </ComponentExample>
      </ComponentSection>
    </>
  );
}

export default App;
