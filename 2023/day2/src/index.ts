import { readFileSync } from "fs";

interface CubeSet {
  blue: number;
  red: number;
  green: number;
}

interface CubeGame {
  sets: CubeSet[];
}

interface CubeRecord {
  games: CubeGame[];
}

interface Maxs {
  maxRed: number;
  maxBlue: number;
  maxGreen: number;
}

function getInput(): string {
  const input = readFileSync("input", "utf-8");
  return input;
}

async function main(): Promise<void> {
  const input = getInput();
  const record = parseRecord(input);

  const idsSum = getSumOfPossibleGameIds(record);

  console.log(`sum: ${idsSum}`);
}

export function getSumOfPossibleGameIds(record: CubeRecord): number {
  const maxs = {
    maxBlue: 14,
    maxGreen: 13,
    maxRed: 12,
  };
  // const possibleGames = record.games.map((e, i) => {
  //   return !isImpossibleGame(e, maxs);
  // });

  const possibleGameIds = record.games.map((e, i) => {
    return !isImpossibleGame(e, maxs) ? i + 1 : null;
  });

  console.log(`possible games ids: ${possibleGameIds}`);

  const idSum = possibleGameIds.reduce((p, c) => (p ?? 0) + (c ?? 0), 0) ?? 0;

  console.log(`id sum: ${idSum}`);

  return idSum;
}

export function isImpossibleGame(game: CubeGame, maxs: Maxs): boolean {
  const sets = game.sets;

  for (const set of sets) {
    if (
      set.blue > maxs.maxBlue ||
      set.green > maxs.maxGreen ||
      set.red > maxs.maxRed
    ) {
      return true;
    }
  }

  return false;
}

export function parseRecord(input: string): CubeRecord {
  let records: CubeRecord = {
    games: [],
  };

  const lines = input.split("\n").filter((value) => value !== "");
  console.log(`lines: ${lines.length}`);

  for (const line of lines) {
    const gameNumber = lines.indexOf(line) + 1;
    const sets = line.split(":")[1].split(";");
    // console.log(`split ${gameNumber}: ${sets[0]}`);

    const colorSets = sets.map<CubeSet>((set) => {
      const cubesOfColor = set.split(",");
      const cubesColorMap = cubesOfColor.map<{
        color: string;
        numbers: number;
      }>((e) => {
        return {
          numbers: Number.parseInt(e.split(" ")[1]),
          color: e.split(" ")[2],
        };
      });
      return {
        red: cubesColorMap.find((e) => e.color == "red")?.numbers ?? 0,
        blue: cubesColorMap.find((e) => e.color == "blue")?.numbers ?? 0,
        green: cubesColorMap.find((e) => e.color == "green")?.numbers ?? 0,
      };
    });

    // console.log(`sets: ${JSON.stringify(colorSets)}`);

    const game: CubeGame = {
      sets: colorSets,
    };

    records.games.push(game);
  }

  return records;
}

main();
