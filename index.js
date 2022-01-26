class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const skips = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let out = ''
    let i = 0
    for (let each of string.split(' ')) {
      if (i != 0) {
        if (skips.includes(each) == false) {
        out += this.capitalize(each) + ' '
        }
        else { out += each + ' ' }
      }
      if (i == 0) {
        out += this.capitalize(each) + ' '
        i++
        }
    }
    return out.slice(0,-1)
  }

}

// if (each.length == 1) {out += each.toUpperCase() + ' '}
// if (each.length > 1) {
//   out += each.charAt(0).toUpperCase()
// }