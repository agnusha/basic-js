

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

      let turnsCalculated = Math.pow(2, disksNumber) - 1;
      return {
        turns: turnsCalculated,
        seconds: turnsCalculated / (turnsSpeed / 3600)
      };

}