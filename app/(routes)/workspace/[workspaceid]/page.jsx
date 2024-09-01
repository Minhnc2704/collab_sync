"use client";

import React, { useState } from "react";
import SideNav from "../_components/SideNav";
import DocumentHeader from "../_components/DocumentHeader";
import EmptySpace from "../_components/EmptySpace";
import { Room } from "@/app/Room";

function Workspace({ params }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <Room params={params}>
      <div>
        {/* Side Nav */}
        <div className="">
          <SideNav params={params} onSelectFile={setSelectedFile} />
        </div>

        {/* Main Content */}
        <div className="md:ml-72">
          <DocumentHeader params={params} />
          {selectedFile ? (
            <div className="content-area">
              {/* Render your selected file content here */}
            </div>
          ) : (
            <EmptySpace /> // Show the EmptySpace component when no file is selected
          )}
        </div>
      </div>
    </Room>
  );
}

export default Workspace;
