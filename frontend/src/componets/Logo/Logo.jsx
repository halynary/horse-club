import horseLogo from "../../assets/horse.svg";
export default function Logo() {
  return (
    <div className="logo">
      <img src={horseLogo} alt="Логотип кінного клубу" width={80} height={80} className="logo-image" />
      <span className="logo-word">
        STRIDE
        <small>
          <i />
          КІННИЙ КЛУБ
          <i />
        </small>
      </span>
    </div>
  );
}
