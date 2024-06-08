import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      
      <div class="form-group ">
  
    <div class="col-12 col-md-6 col-lg-4 mx-auto d-flex">
      <input type="text" class="form-control form-control-lg border-1 shadow-none" id="colFormLabelLg"  value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name or zip code"/>
        <button className='btn btn-secondary ms-2 rounded-5' type="submit">Search</button>
    </div>
    
  </div>
      
      
      
    </form>
  );
}

export default SearchForm;
