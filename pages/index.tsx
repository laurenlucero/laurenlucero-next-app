import React, { useState } from 'react';
import Head from 'next/head';
import ResourceList from '../components/ResourceList';
import mockData from '../data/mockData';
import Filters, { FiltersState } from '../components/Filters';

const IndexPage: React.FC = () => {
  const [filters, setFilters] = useState<FiltersState>({
    resourceName: '',
    gradeLevels: [],
  });

  const handleFilterChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Head>
        <title>TRAILS Mental Health Resources</title>
        {/* Add other metadata */}
      </Head>
      <header>
        {/* Add header content */}
      </header>
      <main>
        <h1>Mental Health Resources</h1>
        <Filters onFilterChange={handleFilterChange}/>
        <ResourceList resources={mockData} filters={filters}/>
      </main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default IndexPage;
