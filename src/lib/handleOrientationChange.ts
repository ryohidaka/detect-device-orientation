import { Orientation } from "../types";

/**
 * Handles the orientation change event.
 *
 * @param event - The DeviceOrientationEvent containing alpha, beta, and gamma values.
 * @returns An object representing the orientation with absolute, alpha, beta, gamma properties.
 */
export function handleOrientationChange(
  event: DeviceOrientationEvent,
): Orientation {
  return {
    absolute: event.absolute || false,
    alpha: event.alpha as number,
    beta: event.beta as number,
    gamma: event.gamma as number,
  };
}
