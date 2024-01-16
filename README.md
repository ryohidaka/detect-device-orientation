# detect-device-orientation

[![npm version](https://badge.fury.io/js/detect-device-orientation.svg)](https://badge.fury.io/js/detect-device-orientation)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Detect device orientation.

## Notes

- DeviceOrientationEvent is available only in [secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) (HTTPS), in some or all [supporting browsers](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation#browser_compatibility).

## Installation

You can install this library using npm:

```shell
npm install detect-device-orientation
```

## Usage

```typescript
import {
  DetectDeviceOrientation,
  Orientation,
} from "detect-device-orientation";

const detectDeviceOrientation = new DetectDeviceOrientation();

detectDeviceOrientation.init((orientation: Orientation) => {
  console.log(`absolute: ${orientation.absolute}`);
  // [Output] absolute: true

  console.log(`alpha: ${orientation.absolute}`);
  // [Output] alpha: 0

  console.log(`beta: ${orientation.beta}`);
  // [Output] beta: 0

  console.log(`gamma: ${orientation.gamma}`);
  // [Output] gamma: 0
});
```

## Link

- [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
