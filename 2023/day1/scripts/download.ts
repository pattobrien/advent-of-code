import { writeFileSync } from 'fs';
import { adventOfCodeUrl, day, sessionCookie } from './core';
// import fetch from 'node-fetch';

const downloadInput = async (day: number): Promise<void> => {
  const url = `${adventOfCodeUrl(day)}/input`;
  console.log(`Downloading from url: ${url}`);
  const response = await fetch(url, {
    headers: {
      Cookie: `session=${sessionCookie}`,
    },
  });

  if (response.ok) {
    const input = await response.text();
    writeFileSync(`src/input.txt`, input);
    console.log(`Day ${day} input downloaded.`);
  } else {
    console.error('Failed to download input:', response.statusText);
  }
};

void downloadInput(day);
