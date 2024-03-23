import React from 'react';
import Head from 'next/head';
import ResourceList from '../components/ResourceList';
import mockData from '../data/mockData';
import Filters from '../components/Filters';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TRAILS Mental Health Resources</title>
        {/* Add other metadata */}
      </Head>
      <header>
        {/* Add header content */}
        <Filters />
      </header>
      <main>
        <h1>Mental Health Resources</h1>
        <ResourceList resources={mockData}/>
      </main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default IndexPage;
