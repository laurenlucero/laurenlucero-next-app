import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const resources = await prisma.resource.findMany();
      const formattedResources = resources.map(resource => ({
        ...resource, grades: resource.grades.split(','),
      }))
      res.status(200).json(formattedResources);
    } catch (error) {
      console.error('Error fetching resources:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
