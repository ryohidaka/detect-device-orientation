import { ExtendedDeviceOrientationEvent, Orientation } from "../types";

/**
 * Handles the device orientation change event.
 *
 * @param event - The DeviceOrientationEvent containing alpha, beta, gamma, webkitCompassHeading, and webkitCompassAccuracy values.
 * @returns An object representing the orientation with absolute, alpha, beta, gamma, webkitCompassHeading, and webkitCompassAccuracy properties.
 */
export function handleOrientationChange(
  event: ExtendedDeviceOrientationEvent,
): Orientation {
  return {
    absolute: event.absolute || false,
    alpha: event.alpha as number,
    beta: event.beta as number,
    gamma: event.gamma as number,
    webkitCompassHeading: event.webkitCompassHeading,
    webkitCompassAccuracy: event.webkitCompassAccuracy,
  };
}
