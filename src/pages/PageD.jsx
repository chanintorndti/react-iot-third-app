import React from "react";
import HeaderIot from "./../components/HeaderIot.jsx";
import FooterIot from "./../components/FooterIot.jsx";
import NavBarIot from "./../components/NavBarIot.jsx";

export default function PageD() {
  return (
    <div>
      <NavBarIot />
      <HeaderIot wow="หน้า A" woo="😍" />
      PageD
      <FooterIot />
    </div>
  );
}
