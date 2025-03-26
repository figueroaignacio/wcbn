import { Route, Routes } from "react-router";

// Pages
import { CreateChallenge } from "../pages/create-challenge/create-challenge";
import { Home } from "../pages/home/home";

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateChallenge />} />
    </Routes>
  );
}
