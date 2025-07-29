import { Link, NavLink } from "react-router";

const Header = () => {
  const activeFunc = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
      <NavLink style={activeFunc} to={"/"}>
        Anasayfa
      </NavLink>
      <NavLink style={activeFunc} to={"/hakkimizda"}>
        Hakkımızda
      </NavLink>
      <NavLink style={activeFunc} to={"/urunler"}>
        Ürünler
      </NavLink>
      <NavLink style={activeFunc} to={"/todo"}>
        Todo
      </NavLink>
      <NavLink style={activeFunc} to={"/iletisim"}>
        İletişim
      </NavLink>
    </div>
  );
};

export default Header;
