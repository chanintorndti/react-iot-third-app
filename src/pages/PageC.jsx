import React from 'react'
import HeaderIot from "./../components/HeaderIot.jsx";
import FooterIot from "./../components/FooterIot.jsx";
import NavBarIot from "./../components/NavBarIot.jsx";

export default function PageC() {
  return (
    <div>
      <NavBarIot />
      <HeaderIot wow="หน้า C" woo="🤣"/>
      PageC
      <FooterIot />
    </div>
  )
}
