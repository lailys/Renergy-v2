import "./menuIcon.css";

function MenuIcon({ openMenu }) {
  return (
    <div className="MenuIcon-wrapper navIcon">
      <div
        className="dot-icon navIcon"
        id={openMenu ? "dot-icon-opened" : ""}
      />{" "}
    </div>
  );
}

export default MenuIcon;
