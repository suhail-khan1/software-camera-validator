# Software Camera Validator

This utility checks whether a given set of hardware cameras can fulfill the subject distance and light level requirements of a software-defined camera.
It ensures that the combined capabilities of the hardware cameras **completely cover the target ranges** for both subject distance and light levels.

---

# Features

- Validates if a set of hardware cameras can fully cover a required subject distance range
- Validates if they can also cover a required light level range
- Efficient and optimized logic to merge and check ranges
- Written in plain, modern JavaScript — no dependencies

---

# Example Usage
const desiredSubjectRange = [1, 10];
const desiredLightRange = [100, 1000];

const hardwareCameras = [
  { subjectRange: [1, 4], lightRange: [100, 400] },
  { subjectRange: [4, 7], lightRange: [400, 700] },
  { subjectRange: [7, 10], lightRange: [700, 1000] }
];

console.log("Supported:", isSoftwareCameraSupported(desiredSubjectRange, desiredLightRange, hardwareCameras));
// Output: Supported: true

# Run the code
Run in Browser Console
- Open your browser's DevTools (F12).
- Go to the Console tab.
- Paste the cameraValidator.js file content.
- Press Enter.

Run in Online Editors
Paste cameraValidator.js file content into any of the following:
- JSFiddle
- CodePen
- StackBlitz

Run with Node.js (Locally)
Make sure you have Node.js installed, then run bleow command:
- node cameraValidator.js
