import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ResourceList from '../components/ResourceList';
import Filters, { FiltersState } from '../components/Filters';
import { Resource } from '@prisma/client';

const IndexPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filters, setFilters] = useState<FiltersState>({
    resourceName: '',
    gradeLevels: [],
  });

  useEffect(() => {
    fetch('/api/resources')
      .then(response => response.json())
      .then((data) => {
        // Ensure grades is an array of strings for each resource
        const formattedData = data.map((resource: Resource) => ({
          ...resource,
          grades: Array.isArray(resource.grades) ? resource.grades : [resource.grades]
        })) as Resource[];
        setResources(formattedData);
      })
      .catch(error => console.error('Error fetching resources:', error));
  }, []); // Fetch data only once on component mount

  const handleFilterChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Head>
        <title>TRAILS Mental Health Resources</title>
      </Head>
      <main>
        <h1>Mental Health Resources</h1>
        <Filters onFilterChange={handleFilterChange} />
        <ResourceList resources={resources} filters={filters} />
      </main>
    </div>
  );
};

export default IndexPage;
