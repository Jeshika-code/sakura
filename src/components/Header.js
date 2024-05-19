import React from "react";
import { Call, Email, LocationOn } from "@mui/icons-material";

const Header = () => {
  return (
    <header className=" bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col  lg:flex-row justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <p className="mr-4 mb-2 lg:mb-0 text-sm">
            <LocationOn sx={{ fontSize: 18 }} /> Butwal 015910776
          </p>
          <p className="mr-4 mb-2 lg:mb-0 text-sm">
            <Email sx={{ fontSize: 18 }} /> example@example.com
          </p>
          <p className="text-sm">
            <Call sx={{ fontSize: 18 }} /> +1234567890
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
