import React from 'react';
import ResourceItem from './ResourceItem';
import { FiltersState } from './Filters';

interface Resource {
  id: number;
  title: string;
  description: string;
  grades: string[];
}

interface ResourceListProps {
  resources: Resource[];
  filters: FiltersState;
}

const ResourceList: React.FC<ResourceListProps> = ({ resources, filters }) => {
const filteredResources = resources.filter(resource => {
    // Filter by resourceName if provided
    if (filters.resourceName && !resource.title.toLowerCase().includes(filters.resourceName.toLowerCase())) {
      return false;
    }
    // Filter by gradeLevels if provided
    if (filters.gradeLevels.length > 0 && !resource.grades.some(grade => filters.gradeLevels.includes(grade))) {
      return false;
    }
    return true;
  });

  // Sort filteredResources alphabetically by title
  const sortedResources = filteredResources.slice().sort((a, b) => a.title.localeCompare(b.title));


  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {sortedResources
          .map((resource) => (
            <ResourceItem key={resource.id} resource={resource} />
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
