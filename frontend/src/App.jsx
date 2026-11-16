//import { Sidebar } from "lucide-react";
import "./App.css";
import "./main.scss";
import Header from "./componets/Header/Header";
//import "./assets/styles/variables.scss";
import { Sidebar } from "./componets/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        { /*<Header name={user.name} roleLabel={labels[user.role]} />*/}
        < Header name="Іван Іванов" roleLabel="Адміністратор" />
      </main>
    </div>
  );
}