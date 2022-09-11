import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test('increase date with on year', () => {
  const year = new Date().getFullYear();
  
  expect(getFutureDate(`${year}-08-10`).getFullYear()).toBe(2023);
})