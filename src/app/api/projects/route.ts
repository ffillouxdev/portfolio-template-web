import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Erreur lors de la récupération des projets :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
