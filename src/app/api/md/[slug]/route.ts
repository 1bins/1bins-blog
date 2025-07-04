import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const pathname = req.nextUrl.pathname;
    const segments = pathname.split('/');
    const slug = segments[segments.length - 1];

    const filePath = path.join(process.cwd(), 'public', 'about', 'md', `${slug}.md`);
    const file = await fs.readFile(filePath, 'utf8');

    return NextResponse.json({ data: file });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '마크다운 파일이 존재하지 않습니다.' },
      { status: 404 }
    )
  }
}