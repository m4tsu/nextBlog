import { toDate, toDateTime } from "@/lib/moment";

describe("toDate", () => {
  it("formatting is valid", () => {
    const dateStr = new Date("December 10, 2019").toISOString();
    expect(toDate(dateStr)).toBe("2019-12-10");
  });
});

describe("toDateTime", () => {
  it("formatting is valid", () => {
    const dateStr = new Date("December 10, 2019").toISOString();
    expect(toDateTime(dateStr)).toBe("2019-12-10 00:00:00");
  });
});
