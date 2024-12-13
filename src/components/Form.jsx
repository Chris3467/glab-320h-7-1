import { useState, useEffect } from "react";

function Form(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    // Prevent page from refreshing on form submission
    evt.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
