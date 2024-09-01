import React from "react";
import Image from "next/image";

function EmptySpace() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Container for the image and message */}
      <div className="flex items-center p-4 rounded-md">
        {/* Image placed on the left side */}
        <img
          src="/arrow.png" // Replace with the correct path to your open file image
          alt="Open file"
          className="w-40 h-40 mr-10" // Adjust the image size as needed and add margin to the right
        />
        {/* Message placed on the right side of the image */}
        <p className="text-3xl font-bold text-gray-600">
          Please open the file you want to work on
        </p>
      </div>
    </div>
  );
}

export default EmptySpace;
