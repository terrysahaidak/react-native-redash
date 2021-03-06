import {
  mix,
  round,
  lerp,
  bin,
  cubicBezier,
  clamp,
  between,
  toRad,
  toDeg,
} from "../Math";

test("bin()", () => {
  expect(bin(true)).toBe(1);
  expect(bin(false)).toBe(0);
});

test("round()", () => {
  expect(round(5.123, 0)).toBe(5);
  expect(round(5.123, 1)).toBe(5.1);
  expect(round(5.123, 2)).toBe(5.12);
  expect(round(5.123, 3)).toBe(5.123);
});

test("mix()", () => {
  expect(mix(0, 10, 20)).toBe(10);
  expect(mix(1, 10, 20)).toBe(20);
  expect(mix(0.5, 10, 20)).toBe(15);
  expect(mix(0.25, 10, 20)).toBe(12.5);
  expect(mix(0.8, 10, 20)).toBe(18);
});

test("lerp()", () => {
  expect(lerp(0, 10, 1)).toBe(10);
  expect(lerp(1, 10, 0)).toBe(1);
  expect(lerp(0, 10, 0.5)).toBe(5);
});

test("cubicBezier()", () => {
  expect(cubicBezier(1, 0, 0.1, 0.1, 1)).toBe(1);
  expect(cubicBezier(0, 0, 0.1, 0.1, 1)).toBe(0);
});

test("clamp()", () => {
  expect(clamp(-1, 0, 100)).toBe(0);
  expect(clamp(1, 0, 100)).toBe(1);
  expect(clamp(101, 0, 100)).toBe(100);
});

test("between()", () => {
  expect(between(-1, 0, 100)).toBe(false);
  expect(between(0, 0, 100)).toBe(true);
  expect(between(0, 0, 100, false)).toBe(false);
});

test("toRad()", () => {
  expect(toRad(180)).toBe(Math.PI);
  expect(toDeg(Math.PI)).toBe(180);
  expect(toDeg(Math.PI / 4)).toBe(45);
});
