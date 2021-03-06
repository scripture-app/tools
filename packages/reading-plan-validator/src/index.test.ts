import * as path from "path";
import { promises as fs } from "fs";

import { Passage } from "@bible-reader/types";
import parsePassage from "@bible-reader/passage-parser";
import validateReadingPlan from ".";
import v11n from "../testData/kjvV11n";

async function readData() {
  try {
    let i = 0;
    const data = await fs.readFile(
      path.join(__dirname, "..", "testData", "nt.csv"),
      "utf-8"
    );
    const rows = data.toString().split("\n");
    const passages: Array<Passage> = [];
    const dates: string[] = [];
    for (const row of rows) {
      const fields = row.split("#");
      dates[i] = fields[0].trim();
      passages[i] = parsePassage(v11n, fields[1].trim(), fields[2].trim());
      i++;
    }
    const errors = validateReadingPlan(passages, v11n, true);
    return errors;
  } catch (error) {
    console.error(error);
  }
  return [];
}

describe("reading-plan-validator", () => {
  it("should have proper number of error and error messages for given reading plan CSV", async () => {
    const errors = await readData();
    expect(errors.length).toBe(5);

    expect(errors[0].isError).toBe(true);
    expect(errors[0].message).toBe(
      "Discontinuity: Previous chapter was not closed."
    );
    expect(errors[0].passageIndex).toBe(22);

    expect(errors[1].isError).toBe(true);
    expect(errors[1].message).toBe(
      "Discontinuity: Previous chapter was not closed."
    );
    expect(errors[1].passageIndex).toBe(62);

    expect(errors[2].isError).toBe(true);
    expect(errors[2].message).toBe("Discontinuity: Verse(s) skipped.");
    expect(errors[2].passageIndex).toBe(182);

    expect(errors[3].isError).toBe(true);
    expect(errors[3].message).toBe(
      "Discontinuity: Previous chapter was not closed."
    );
    expect(errors[3].passageIndex).toBe(247);

    expect(errors[4].isError).toBe(true);
    expect(errors[4].message).toBe("Discontinuity: Verse(s) skipped.");
    expect(errors[4].passageIndex).toBe(326);
  });
});
readData();
