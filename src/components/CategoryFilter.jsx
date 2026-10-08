function CategoryFilter({ category, setCategory, categories }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;