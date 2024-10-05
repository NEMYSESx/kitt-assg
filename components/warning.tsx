import React from "react";

interface WarningMessageProps {
  message: string;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ message }) => {
  return message ? (
    <div className="text-red-600 mt-4 text-center">{message}</div>
  ) : null;
};

export default WarningMessage;
