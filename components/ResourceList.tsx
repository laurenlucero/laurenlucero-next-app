import React from 'react';
import ResourceItem from './ResourceItem';

interface Resource {
  id: number;
  title: string;
  description: string;
  grades: string[];
}

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {resources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
