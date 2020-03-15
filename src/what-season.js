module.exports = function getSeason(date) {
    if (date==null)
      return 'Unable to determine the time of year!';
    else if (!check_date(date))
      throw Error;
    else switch (date.getMonth()) {
      case 0:
      case 1:
      case 11:
        return "winter";
      case 2:
      case 3:
      case 4:
        return "spring";
      case 5:
      case 6:
      case 7:
        return "summer";
      case 8:
      case 9:
      case 10:
        return "autumn";
    }
};

function check_date(date)
{
  return date.getTime() === date.getTime(); 
}
