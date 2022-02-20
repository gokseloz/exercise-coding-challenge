import React from "react";
import "./FormInput.css";

interface IFormInputProps {
  setSortMethod: any;
  sortMethod: any;
  setSearchTerm: any;
}

const FormInput: React.FC<IFormInputProps> = ({
  setSortMethod,
  sortMethod,
  setSearchTerm,
}) => {
  return (
    <form action="#">
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <select
        name="sort"
        id="sort"
        onChange={(e) => setSortMethod(e.target.value)}
        value={sortMethod}
      >
        <option value="yearDescending">Sort by year in descending order</option>
        <option value="yearAscending">Sort by year in ascending order</option>
        <option value="titleDescending">
          Sort by title in descending order
        </option>
        <option value="titleAscending">Sort by title in ascending order</option>
      </select>
    </form>
  );
};

export default FormInput;
