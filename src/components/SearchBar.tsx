interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <input
      className="search-input"
      type="text"
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products"
    />
  )
}

export default SearchBar
