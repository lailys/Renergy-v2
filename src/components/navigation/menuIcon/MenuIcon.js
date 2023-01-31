import "./menuIcon.css";

function MenuIcon({ openMenu }) {
  return (
    <div
      className="MenuIcon-wrapper navIcon"
      id={openMenu ? "MenuIcon-wrapper-opened" : ""}
    >
      <div className="dot-icon navIcon" />
      <div className="dot-icon navIcon" />
      <div className="dot-icon navIcon" />
    </div>
  );
}

export default MenuIcon;
