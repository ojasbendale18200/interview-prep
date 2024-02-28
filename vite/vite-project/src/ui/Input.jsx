import { useState } from "react";

const Input = ({ type, placeholder, renderProps }) => {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
        <br />
      {renderProps(value)}
    </div>
  );
};

export default Input;
