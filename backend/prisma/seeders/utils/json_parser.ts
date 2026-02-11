import * as fs from "fs";

export function parseJsonFile<T>(relativeFilePath: string): T[] {
  const filePath = relativeFilePath;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  try {
    const columns = data["columns"];
    const rows = data["rows"];
    const result: T[] = rows.map((row: any[]) => {
      const obj: any = {};
      columns.forEach((col: string, index: number) => {
        obj[col] = row[index];
      });
      return obj as T;
    });
    return result;
  } catch (error) {
    throw new Error(`Invalid JSON format in file: ${filePath}`);
  }
}
