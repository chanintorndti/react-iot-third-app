import React from "react";
import HeaderIot from "./../components/HeaderIot.jsx";
import FooterIot from "./../components/FooterIot.jsx";
import NavBarIot from "./../components/NavBarIot.jsx";
import money  from './../assets/money.png';

export default function PageA() {
  return (
    <div>
      <NavBarIot />
      <HeaderIot wow="หน้า A" woo="^_^" />
      {/* ------------- */}

      <div className="w-7/10 border border-gray-300 p-7 mx-auto
                      rounded-lg shadow-xl">
            <h1 className="text-center text-2xl text-green-600 font-bold">
                Money Shared
            </h1>

            <img src={money} alt="รูปเงิน" className="w-30 mx-auto mt-5" />

            <h3 className="font-bold mt-5">
                ป้อนเงิน (บาท)
            </h3>

            <input type="number" placeholder="Input money ...."
                   className="p-2 border border-gray-300 rounded w-full mt-2"/>

            <h3 className="font-bold mt-5">
                ป้อนคน (คน)
            </h3>

            <input type="number" placeholder="Input person ...."
                   className="p-2 border border-gray-300 rounded w-full mt-2"/>

            <div className="flex mt-5">
                <button className="p-3 bg-blue-500 hover:bg-blue-700 mr-2
                                   rounded-lg w-full text-white cursor-pointer">
                    คำนวณ
                </button>
                <button  className="p-3 bg-red-500 hover:bg-red-700 ml-2
                                   rounded-lg w-full text-white cursor-pointer">
                    ยกเลิก
                </button>
            </div>

            <div className="flex justify-center items-center gap-5 mt-5">
                หารกันคนละ
                <span className="text-5xl text-red-500 font-bold">
                    0.00
                </span> 
                บาท
            </div>
      </div>

      {/* ------------- */}
      <FooterIot />
    </div>
  );
}
