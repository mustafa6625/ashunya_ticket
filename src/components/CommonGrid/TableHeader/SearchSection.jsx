import React from "react";
import SearchIcon from "mdi-react/MagnifyIcon";
import CloseCircleIcon from "mdi-react/CloseCircleIcon";

const SearchSection = ({ classes, searchValue, setSearchValue, onChange,handleClose }) => {
  return (
    <div className="w-100">
      <div className="input-group mb-3">
        <span
          className={`input-group-text ${classes.inputIcon}`}
          id="basic-addon1"
        >
          <SearchIcon />
        </span>
        <input
          type="text"
          className={`form-control ${classes.searchInput}`}
          placeholder="Search by loan account, address, etc"
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={searchValue || ""}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onChange(e.target.value);
          }}
        />
        <span
          className={`input-group-text ${classes.inputIcon}`}
          id="basic-addon1"
          role="button"
        >
          <CloseCircleIcon onClick={handleClose} />
        </span>
      </div>
    </div>
  );
};

export default SearchSection;
