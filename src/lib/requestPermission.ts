/**
 * Requests permission for Device Orientation API.
 * If the permission is granted, it allows the application to access device orientation data.
 * @throws Will throw an error if the request for permission fails.
 */
export const requestDeviceOrientationPermission = (
  callback: (event: DeviceOrientationEvent) => void,
) => {
  // Check if the browser supports the DeviceOrientationEvent API
  (DeviceOrientationEvent as any)
    .requestPermission()
    .then((permissionState: string) => {
      // If permission is granted, you can add your event listener here
      if (permissionState === "granted") {
        window.addEventListener("deviceorientation", callback, true);
      }
    })
    // Log the error if the promise is rejected
    .catch((error: Error) =>
      console.error(
        `Error requesting device orientation permission: ${error.message}`,
      ),
    );
};
