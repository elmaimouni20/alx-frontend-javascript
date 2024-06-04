function cleanSet(set, startString) {
  let result = '';

  for (let value of set) {
      if (value.startsWith(startString)) {
          result += '-' + value.slice(startString.length);
      }
  }

  return result.startsWith('-') ? result.slice(1) : result;
}
