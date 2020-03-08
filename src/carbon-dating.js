const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityFloat = parseFloat(sampleActivity);
  if (typeof (sampleActivity) === "string" && sampleActivityFloat > 0 && sampleActivityFloat < 15)
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) /
      (0.693 / HALF_LIFE_PERIOD));
  else return false;
};