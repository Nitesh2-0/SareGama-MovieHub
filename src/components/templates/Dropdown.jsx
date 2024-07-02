import React, { useEffect, useState } from 'react';

const Dropdown = ({ options, func , title}) => {
  if(title.toLowerCase()=='duration'){
    title='day'
  }
  if(title.toLowerCase()=='filter'){
    title='all'
  }
  if(title.toLowerCase()=='category'){
    title='all'
  }
  const [selectedOption, setSelectedOption] = useState(title);

  useEffect(() => {
    func(selectedOption.toLocaleLowerCase())
  }, [selectedOption])

  return (
    <div className="px-4 py-1 w-52 text-zinc-300">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className=" mt-1 block w-full px-3 py-2 bg-[#1F1E24] border border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>
          {title.toUpperCase()}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
