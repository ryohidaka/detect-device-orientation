export type Orientation = {
  absolute: boolean;
  alpha: number;
  beta: number;
  gamma: number;
  webkitCompassHeading?: number;
  webkitCompassAccuracy?: number;
};

export type ExtendedDeviceOrientationEvent = DeviceOrientationEvent & {
  webkitCompassHeading?: number;
  webkitCompassAccuracy?: number;
};
