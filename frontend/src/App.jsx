//import { Sidebar } from "lucide-react";
import "./App.css";
import "./main.scss";
//import "./assets/styles/variables.scss";
import { Sidebar } from "./componets/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <h1>Головна сторінка</h1>
      </main>
    </div>
  );
}