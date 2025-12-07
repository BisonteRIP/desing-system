import "./App.css";
import "./index.css";
import Button from "./components/ui/button";
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
          <Button variant="">hola como estas</Button>
          <Button variant="outline">hola como estas</Button>
          <Button variant="ghost">hola como estas</Button>

        </ComponentExample>
      </ComponentSection>
    </>
  );
}

export default App;
<ComponentExample title="Tamaños" description="Diferentes tamaños de texto">
  <Badge className="text-xs">Extra Small</Badge>
  <Badge className="text-sm">Small</Badge>
  <Badge>Default</Badge>
  <Badge className="text-base px-4 py-1">Large</Badge>
</ComponentExample>;