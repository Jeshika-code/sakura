import React from "react";
import { Call, Email, LocationOn } from "@mui/icons-material";

const Header = () => {
  return (
    <header className=" bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex flex-col  lg:flex-row justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <p className="mr-4 mb-2 lg:mb-0 text-sm font-bold">
            <LocationOn sx={{ fontSize: 18 }} /> Chauraha,Butwal
          </p>
          <p className="mr-4 mb-2 lg:mb-0 text-sm font-bold">
            <Email sx={{ fontSize: 18 }} /> sakurajapangroup123@gmail.com
          </p>
          <p className="text-sm font-bold">
            <Call sx={{ fontSize: 18 }} /> 071-591138,  9862413738
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;


