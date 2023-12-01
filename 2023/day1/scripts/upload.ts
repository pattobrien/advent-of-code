import { readFileSync } from 'fs';
import { adventOfCodeUrl, day, sessionCookie } from './core';

const uploadAnswer = async (
  day: number,
  level: number,
  answer: string
): Promise<void> => {
  const response = await fetch(`${adventOfCodeUrl(day)}/answer`, {
    method: 'POST',
    headers: {
      Cookie: `session=${sessionCookie}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `level=${level}&answer=${answer}`,
  });

  if (response.ok) {
    const content = await response.text();
    console.log('Answer response:', content); // You may want to parse this content according to your needs
  } else {
    console.error('Failed to upload answer:', response.statusText);
  }
};

const level = 1; // Replace with 1 or 2 for the corresponding part of the puzzle

const answer = readFileSync('src/output.txt');

void uploadAnswer(day, level, answer.toString());
