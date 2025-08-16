import React from "react";

export interface LayoutButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({
  label = "Button",
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`px-3 py-1 text-sm rounded border hover:opacity-90 transition ${className}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default LayoutButton;
