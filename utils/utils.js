const helperFunctions = {
    /* Helper function to determine if all chars in a string are A - Z or a - z */
    isString: (str) => {
      if (str.length === 0) return false
      for (let i = 0; i < str.length; i++) {
        if (!((str.charCodeAt(i) > 64 &&str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) || (str.charCodeAt(i) === 32))) {
          return false
        }
      }
      return true
    },
  
    /* Helper function to determine if all chars in a string are A - Z or a - z or 0 - 9 */
    isAlphaNum: (str) => {
      if (str.length === 0) return false
      for (let i = 0; i < str.length; i++) {
        if (!((str.charCodeAt(i) > 64 &&str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) || (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || (str.charCodeAt(i) === 32))) {
          return false
        }
      }
      return true
    },
  
    /* Helper function to determine if all charsin a string are 0 - 9 or the symbol - */
    isZip: (str) => {
      if (str.length === 0) return false
      if (str.length === 5) {
        for (let i = 0; i < str.length; i++) {
          if (!((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58))) {
            return false
          }
        }
        return true
      }
      if (str.length === 10) {
        for (let i = 0; i < str.length; i++) {
          if (!((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || (str.charCodeAt(i) === 45))) {
            return false
          }
        }
        return true
      }
      return false
    },
  
    /* Helper function to determine if state entered is a valid 2-digit state abbreviation */
    isState: (str) => {
      const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
      if (states.includes(str)) return true
      return false
    }
}

module.exports = helperFunctions