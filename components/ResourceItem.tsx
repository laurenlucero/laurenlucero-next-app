import React from 'react';

interface Resource {
  id: number;
  title: string;
  description: string;
  grades: string[];
}

interface ResourceItemProps {
  resource: Resource;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource }) => {
  return (
    <li>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <p>Grade Band: {resource.grades.join(', ')}</p>
    </li>
  );
};

export default ResourceItem;
