import { handleOrientationChange } from "../src/lib/handleOrientationChange";

describe("handleOrientationChange", () => {
  test("should return an Orientation object", () => {
    const mockEvent = {
      absolute: true,
      alpha: 90,
      beta: 45,
      gamma: 30,
    };

    const result = handleOrientationChange(mockEvent as DeviceOrientationEvent);

    expect(result).toEqual({
      absolute: true,
      alpha: 90,
      beta: 45,
      gamma: 30,
    });
  });

  test("should handle null absolute value", () => {
    const mockEvent = {
      alpha: 90,
      beta: 45,
      gamma: 30,
    };

    const result = handleOrientationChange(mockEvent as DeviceOrientationEvent);

    expect(result).toEqual({
      absolute: false,
      alpha: 90,
      beta: 45,
      gamma: 30,
    });
  });
});
