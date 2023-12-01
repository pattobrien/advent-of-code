import { readFileSync } from 'fs';
import { adventOfCodeUrl, day, level, sessionCookie } from './core';

export const uploadAnswer = async (
  day: number,
  level: number,
  answer: string
): Promise<void> => {
  const response = await fetch(`${adventOfCodeUrl(day)}/answer`, {
    method: 'POST',
    headers: {
      Cookie: `session=${sessionCookie}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `level=${level}&answer=${answer}`,
  });

  if (response.ok) {
    console.log('Correct answer!!');
    console.log(await response.text());
  } else {
    console.error('Failed to upload answer:', response.statusText);
  }
};

// const level = 1; // TODO: dynamically replace

const answer = readFileSync('src/output2.txt');

void uploadAnswer(day, level, answer.toString());
