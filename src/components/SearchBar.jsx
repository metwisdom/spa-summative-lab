function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-area">
      <input
        type="text"
        placeholder="Search Projects"
        aria-label="Search projects"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;