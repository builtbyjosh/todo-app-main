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
        className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-300 to-purple-600 mr-3 flex items-center justify-center ${
          isChecked ? "bg-gradient-to-r from-blue-300 to-purple-600" : ""
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center ${
            !isChecked
              ? "dark:bg-darkTheme-very-dark-desaturated-blue bg-lightTheme-very-light-gray"
              : ""
          }`}
        >
          {isChecked && (
            <img
              src={checkBox}
              alt="Checkmark"
              className="w-4 h-4 text-white bg-primary-check-background"
            />
          )}
        </div>
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
