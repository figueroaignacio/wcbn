import { Header } from "./components/header/header";
import { AppRouter } from "./components/router";
import { Seo } from "./components/seo";

export default function App() {
  return (
    <div>
      <Seo
        title="WCBN - Completed Challenges Collection"
        description="Fullstack site that showcases my completed web challenges"
      />
      <Header />
      <AppRouter />
    </div>
  );
}
