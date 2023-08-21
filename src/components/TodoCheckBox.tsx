import React from "react";
import checkBox from "../images/icon-check.svg";

type CheckBoxType = {
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TodoCheckBox = ({ isChecked, onChange }: CheckBoxType) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div
        className={`w-6 h-6 border rounded-full border-gray-300 mr-3 flex items-center justify-center ${
          isChecked ? "bg-blue-500" : ""
        }`}
      >
        {isChecked && (
          <img src={checkBox} alt="Checkmark" className="w-4 h-4 text-white" />
        )}
      </div>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
};

export default TodoCheckBox;
