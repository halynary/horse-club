import horseLogo from "@/assets/images/horse.svg";
import "./Logo.scss";
export default function Logo() {
  return (
    <div className="logo">
      <img src={horseLogo} alt="Логотип кінного клубу" width={80} height={80} className="logo-image" />
      <div className="logo-word">
        <span className="logo-name">
          Стременно</span>
        <br /> <p className="logo-text">Кінний клуб</p>
      </div>
    </div>
  );
}
