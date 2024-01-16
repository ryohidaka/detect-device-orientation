import { handleOrientationChange } from "./lib/handleOrientationChange";
import { Orientation } from "./types";

export class DetectDeviceOrientation {
  private onOrientationChange: ((orientation: Orientation) => void) | null =
    null;

  /**
   * Constructs a new DetectDeviceOrientation instance.
   */
  constructor() {
    this.handleOrientationChange = this.handleOrientationChange.bind(this);
  }

  /**
   * Initializes the DetectDeviceOrientation instance and sets the callback function for orientation changes.
   *
   * @param callback - A function to be called on device orientation change.
   */
  init(callback?: (orientation: Orientation) => void) {
    if (!("DeviceOrientationEvent" in window)) {
      console.warn("DeviceOrientationEvent is not supported on this device.");
      return;
    }

    if (typeof callback !== "function") {
      throw new Error(
        "Callback function is not provided or is not a function.",
      );
    }

    this.onOrientationChange = callback;
    window.addEventListener(
      "deviceorientation",
      this.handleOrientationChange,
      true,
    );
  }

  /**
   * Resets the DetectDeviceOrientation instance by removing the orientation change event listener.
   */
  reset() {
    window.removeEventListener(
      "deviceorientation",
      this.handleOrientationChange,
      true,
    );
  }

  /**
   * Handles the orientation change event and calculates the device orientation in degrees.
   *
   * @param event - The DeviceOrientationEvent containing alpha, beta, and gamma values.
   * @returns An object representing the orientation with absolute, alpha, beta, gamma, and degrees properties.
   */
  handleOrientationChange(event: DeviceOrientationEvent) {
    if (typeof this.onOrientationChange !== "function") {
      throw new Error(
        "Callback function is not provided or is not a function.",
      );
    }

    const orientation = handleOrientationChange(event);
    this.onOrientationChange(orientation);
  }
}
