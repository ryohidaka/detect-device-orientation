import { DetectDeviceOrientation } from "../src/DetectDeviceOrientation";
import { ExtendedDeviceOrientationEvent } from "../src/types";

// Mock DeviceOrientationEvent
global.DeviceOrientationEvent = jest.fn();

// Describe test cases
describe("DetectDeviceOrientation", () => {
  let detectDeviceOrientation: DetectDeviceOrientation;
  let mockCallback: jest.Mock;

  beforeEach(() => {
    mockCallback = jest.fn();
    detectDeviceOrientation = new DetectDeviceOrientation();
    detectDeviceOrientation.init(mockCallback);
  });

  it("should handle orientation change", () => {
    // Create a mock DeviceOrientationEvent
    const mockEvent = {
      alpha: 1,
      beta: 1,
      gamma: 1,
      absolute: true,
      webkitCompassHeading: 1,
      webkitCompassAccuracy: 1,
    } as ExtendedDeviceOrientationEvent;

    // Call the handleOrientationChange method
    detectDeviceOrientation.handleOrientationChange(mockEvent);

    // Verify if the mocked function returns the expected value
    expect(mockCallback).toHaveBeenCalledWith({
      absolute: true,
      alpha: 1,
      beta: 1,
      gamma: 1,
      webkitCompassHeading: 1,
      webkitCompassAccuracy: 1,
    });
  });
});
