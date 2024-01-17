import { handleOrientationChange } from "../src/lib/handleOrientationChange";
import { ExtendedDeviceOrientationEvent } from "../src/types";

describe("handleOrientationChange", () => {
  test("should return an Orientation object", () => {
    const mockEvent = {
      absolute: true,
      alpha: 90,
      beta: 45,
      gamma: 30,
      webkitCompassHeading: 10,
      webkitCompassAccuracy: 20,
    };

    const result = handleOrientationChange(
      mockEvent as ExtendedDeviceOrientationEvent,
    );

    expect(result).toEqual({
      absolute: true,
      alpha: 90,
      beta: 45,
      gamma: 30,
      webkitCompassHeading: 10,
      webkitCompassAccuracy: 20,
    });
  });

  test("should handle null absolute value", () => {
    const mockEvent = {
      alpha: 90,
      beta: 45,
      gamma: 30,
      webkitCompassHeading: 10,
      webkitCompassAccuracy: 20,
    };

    const result = handleOrientationChange(
      mockEvent as ExtendedDeviceOrientationEvent,
    );

    expect(result).toEqual({
      absolute: false,
      alpha: 90,
      beta: 45,
      gamma: 30,
      webkitCompassHeading: 10,
      webkitCompassAccuracy: 20,
    });
  });
});
