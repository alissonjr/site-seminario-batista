export default class TextFormat {
  /**
   * 
   * 
   * @static
   * @param {any} text 
   * @returns 
   * @memberof TextFormat
   */
  static Phone(text) {
    return text.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
  }
}