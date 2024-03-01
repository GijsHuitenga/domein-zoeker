
import { NextResponse } from 'next/server';

import fs from 'fs';
import path from 'path';

export async function GET(req) {
  try {

    const filePath = path.join(process.cwd(), 'json', 'winkelwagen.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return NextResponse.json(data, {
      status: 200
    })

  } catch (error) {

    return NextResponse.json(
      { error: 'Failed to load cart ' + error },
      {
        status: 500
      }
    );

  }
}

export async function POST(req) {
  try {

    const body = await req.json();
    const { domain } = body;
    
    if (!domain.reason) {

      const filePath = path.join(process.cwd(), 'json', 'winkelwagen.json');
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData);

      data.push(domain);

      fs.writeFileSync(filePath, JSON.stringify(data));

      return NextResponse.json({
        status: 201
      });

    } else {

      return NextResponse.json(
        { message: `${domain.domain} is not for sale, reason being: ${domain.reason}` },
        {
          status: 403
        }
      );

    }
    
  } catch (error) {

    return NextResponse.json(
      { error: 'Failed to add to cart ' + error },
      {
        status: 500
      }
    );

  }
}
