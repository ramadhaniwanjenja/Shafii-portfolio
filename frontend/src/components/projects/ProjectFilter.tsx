import React, { useState } from "react";
import Button from "../common/Button";

interface ProjectFilterProps {
  categories: string[];
  onFilter: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <Button
        variant={selectedCategory === "All" ? "primary" : "secondary"}
        onClick={() => handleFilter("All")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "primary" : "secondary"}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;