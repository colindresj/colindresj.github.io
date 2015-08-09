export default function(string) {
  if (typeof string === 'undefined' || string === null) {
    throw new TypeError('titleizeString did not receive a String type.');
  }

  return String(string).replace(/(?:^|\s)\S/g, c => c.toUpperCase());
}
