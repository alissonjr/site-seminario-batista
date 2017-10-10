import fullPromise from '../utils/fullPromise';

/**
 * 
 * 
 * @export
 * @class teachersProvider
 */
export default class teachersProvider {
  /**
   * Retorna os dados do menu do footer
   * 
   * @static
   * @returns 
   * @memberof teachersProvider
   */
  static async getTeachers() {
    return await fullPromise.onlyData('static/contents/professores.json');
  }
}