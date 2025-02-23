import { Alert, Button } from "@wcbn/ui";
import { CSSProperties } from "react";

const styles: CSSProperties = {
  height: "100dvh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",
};

export default function App() {
  function onClick() {
    alert(`

        ┌─────────────────────────┐
        │  >_ Hello, World!       │
        │                         │
        │  [ ] Run   [ ] Debug    │
        └─────────────────────────┘
               \\   ^__^
                \\  (oo)\\_______
                   (__)\\       )\\/\\
                       ||----w |
                       ||     ||
                       
    `);
  }

  return (
    <div style={styles}>
      <h1>Hello from Web! 🌐</h1>
      <Button onClick={onClick}>Click here</Button>
      <span>👆🏽</span>
      <Alert>That component comes from a shared package, awesome</Alert>
    </div>
  );
}
