interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <select
      className="category-filter"
      value={selectedCategory}
      onChange={(event) => onCategoryChange(event.target.value)}
    >
      <option value="All">All</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter
