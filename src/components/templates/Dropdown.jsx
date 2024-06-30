import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, func , title}) => {
  const [category, setCategory] = useState(title);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    func(category.toLowerCase());
  }, [category, func]);

  const handleCategoryChange = (item) => {
    setCategory(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown relative inline-block">
      <input
        type="checkbox"
        id="my-dropdown"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        className="hidden"
      />
      <label className="w-52 relative bg-[#1F1E24] text-white p-2 cursor-pointer" htmlFor="my-dropdown">
        {category}
        <i className="ri-arrow-drop-down-fill px-2 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
      </label>
      {isOpen && (
        <ul className="dropdown-menu absolute left-0 mt-1 w-full bg-gray-700 text-white">
          {options.map((item, i) => (
            <li
              key={i}
              onClick={() => handleCategoryChange(item)}
              className="p-2 cursor-pointer hover:bg-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
