import React, { useState } from 'react';

export interface FiltersState {
    resourceName: string;
    gradeLevels: string[];
}

interface FiltersProps {
    onFilterChange: (filters: FiltersState) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState<FiltersState>({
        resourceName: '',
        gradeLevels: [],
    });

    const handleResourceNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFilters(prevFilters => ({ ...prevFilters, resourceName: value }));
        onFilterChange({ ...filters, resourceName: value });
    }

    const handleGradeLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const updatedGradeLevels = checked
            ? [...filters.gradeLevels, value]
            : filters.gradeLevels.filter(level => level !== value);
        setFilters(prevFilters => ({ ...prevFilters, gradeLevels: updatedGradeLevels }));
        onFilterChange({ ...filters, gradeLevels: updatedGradeLevels });
    }

    return (
        <div>
          <h2>Filters</h2>
          <label>
            Resource Name:
            <input type="text" value={filters.resourceName} onChange={handleResourceNameChange} />
          </label>
          <div>
            Grade Levels:
            <label>
              <input
                type="checkbox"
                value="3-5"
                checked={filters.gradeLevels.includes('3-5')}
                onChange={handleGradeLevelChange}
              />
              3-5
            </label>
            <label>
              <input
                type="checkbox"
                value="6-8"
                checked={filters.gradeLevels.includes('6-8')}
                onChange={handleGradeLevelChange}
              />
              6-8
            </label>
            <label>
              <input
                type="checkbox"
                value="9-12"
                checked={filters.gradeLevels.includes('9-12')}
                onChange={handleGradeLevelChange}
              />
              9-12
            </label>
          </div>
        </div>
      );
};

export default Filters;
