import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="w-full py-6 bg-white">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">
        740 Employees with <span className="text-blue-500">"Hasan"</span> in
        their name
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Search Box */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Quick search for anyone"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Department Dropdown */}
        <div className="w-48">
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="IT & Software">IT & Software</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Position Dropdown */}
        <div className="w-48">
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Company Dropdown */}
        <div className="w-48">
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Codex IT">Codex IT</option>
            <option value="Tech Solutions">Tech Solutions</option>
            <option value="InnovateX">InnovateX</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
