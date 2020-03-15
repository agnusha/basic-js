function repeat(str = '', separator  = "|", afterSeparator = "+", times = 0, showAddAfterSeparator=false) {
  let strWithSeparator = str+separator;
  if (times==0 || times==1) {
      return (showAddAfterSeparator)?strWithSeparator:str;
  }
  else {
    if(showAddAfterSeparator){
      let strRes = strWithSeparator.concat(afterSeparator);
      return strRes.repeat(times - 1).concat(strWithSeparator);
    }
    else{
      let strRes = str + separator;
      return strRes.repeat(times - 1) + str;
    }
  }
};

module.exports = function repeater(str, options) {
  let separatorBig = repeat(options.addition, options.additionSeparator, null, 
    options.additionRepeatTimes);
  return repeat(str, separatorBig, options.separator, options.repeatTimes, true);

};
