import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} CineSeek. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
