/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
    let timeAllJs = 800;
    let timeBaseJs = 500;
        
    if (knowsProgramming === true) {
    let weeks = timeAllJs / config[focus];
    return Math.ceil(weeks);
  } else if (knowsProgramming === false) {
    let weeks = (timeAllJs + timeBaseJs) / config[focus];
    return Math.ceil(weeks);
  }
};