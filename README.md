# TRAILS Mental Health Resources

TRAILS Mental Health Resources is a full-stack single-page application built using Next.js that provides a list of mental health resource materials. It allows users to browse and filter resources based on their grade level and resource name.

## Features

- Displays alphabetical list of mental health resources with their titles, descriptions, and grade bands
- Filters resources by resource name and grade levels
- Implements backend using Next.js API routes to manage resources
- Utilizes Prisma as the ORM for database operations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/laurenlucero-next-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd laurenlucero-next-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application

### Data Management

- Mock data is provided in the `data/mockData.js` file. You can modify or expand this data to suit your needs
- Use the `scripts/insertData.js` script to insert mock data into the database:

  ```bash
  node scripts/insertData.js
  ```

## Technologies Used

- Next.js
- React
- Prisma
- TypeScript
- SQLite (for development)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.
