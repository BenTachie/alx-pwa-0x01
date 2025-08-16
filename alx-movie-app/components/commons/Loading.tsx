import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8" role="status" aria-live="polite">
      <span className="mr-3 inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent" />
      <span>Loading…</span>
    </div>
  );
};

export default Loading;
