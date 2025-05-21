/**
 * Merges overlapping and adjacent ranges and checks if the result fully covers the target.
 * @param {[number, number]} target - The target range to be covered.
 * @param {Array<[number, number]>} ranges - The list of coverage ranges.
 * @returns {boolean} True if target is completely covered.
 */
function isRangeFullyCovered(target, ranges) {
  if (!Array.isArray(ranges) || ranges.length === 0) return false;

  // Sort ranges by start value
  ranges.sort((a, b) => a[0] - b[0]);

  let [targetStart, targetEnd] = target;
  let currentEnd = targetStart;

  for (const [start, end] of ranges) {
    if (start > currentEnd) break; // gap detected
    currentEnd = Math.max(currentEnd, end);
    if (currentEnd >= targetEnd) return true; // fully covered
  }

  return false;
}

/**
 * Determines if the combined hardware cameras can fully satisfy the software camera's requirements.
 * @param {[number, number]} desiredSubjectRange - Required subject distance range [min, max].
 * @param {[number, number]} desiredLightRange - Required light level range [min, max].
 * @param {Array<{subjectRange: [number, number], lightRange: [number, number]}>} cameras - Hardware cameras.
 * @returns {boolean} True if all requirements are met.
 */
function isSoftwareCameraSupported(desiredSubjectRange, desiredLightRange, cameras) {
  const subjectRanges = [];
  const lightRanges = [];

  for (const cam of cameras) {
    const [sMin, sMax] = cam.subjectRange;
    const [lMin, lMax] = cam.lightRange;

    // Filter invalid ranges early
    if (sMin < sMax && lMin < lMax) {
      subjectRanges.push([sMin, sMax]);
      lightRanges.push([lMin, lMax]);
    }
  }

  return (
    isRangeFullyCovered(desiredSubjectRange, subjectRanges) &&
    isRangeFullyCovered(desiredLightRange, lightRanges)
  );
}

// Test case
const desiredSubjectRange = [1, 10];
const desiredLightRange = [100, 1000];

const hardwareCameras = [
  { subjectRange: [1, 4], lightRange: [100, 400] },
  { subjectRange: [4, 7], lightRange: [400, 700] },
  { subjectRange: [7, 10], lightRange: [700, 1000] }
];

console.log("Supported: ", isSoftwareCameraSupported(desiredSubjectRange, desiredLightRange, hardwareCameras));
