import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-100 text-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Collab & Sync</p>
        <p className="mb-4">© {new Date().getFullYear()} Collab & Sync.</p>
      </div>
    </footer>
  );
}

export default Footer;
