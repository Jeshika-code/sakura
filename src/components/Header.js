
import React from "react";
import { Call, Email, LocationOn } from "@mui/icons-material";

const Header = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sakurajapangroup123@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+9779862413738";
  };

  const handleLocationClick = () => {
    // Example coordinates for Chauraha, Butwal
    const latitude = 27.685546;
    const longitude = 83.465667;
    const label = "Chauraha, Butwal";

    // Open Google Maps with the coordinates and label
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`);
  };

  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <p
            className="mr-4 mb-2 lg:mb-0 text-sm font-bold cursor-pointer"
            onClick={handleLocationClick}
          >
            <LocationOn sx={{ fontSize: 18 }} /> Chauraha, Butwal
          </p>
          <p
            className="mr-4 mb-2 lg:mb-0 text-sm font-bold cursor-pointer"
            onClick={handleEmailClick}
          >
            <Email sx={{ fontSize: 18 }} /> sakurajapangroup123@gmail.com
          </p>
          <p
            className="text-sm font-bold cursor-pointer"
            onClick={handlePhoneClick}
          >
            <Call sx={{ fontSize: 18 }} /> 071-591138, 9862413738
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
