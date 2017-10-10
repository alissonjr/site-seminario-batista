import fullPromise from '../utils/fullPromise';

/**
 * 
 * 
 * @export
 * @class defaultContentProvider
 */
export default class defaultContentProvider {
  /**
   * Retorna os dados do menu do footer
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getFooter() {
    return await fullPromise.onlyData('static/contents/footer_tree.json');
  }

  /**
   * Retorna os dados do menu principal
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getPrimaryMenu() {
    return await fullPromise.onlyData('static/contents/menu_primary_links.json');
  }

  /**
   * Retorna os dados do menu secundário, no topo
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getSecondaryMenu() {
    return await fullPromise.onlyData('static/contents/menu_secondary_links.json');
  }

  /**
   * Retorna os dados do menu secundário, no topo
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getTestimonies() {
    return await fullPromise.onlyData('static/contents/testemunhos.json');
  }

  /**
   * Retorna os dados de endereço do site
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getcompanyAddress() {
    return await fullPromise.onlyData('static/contents/address.json');
  }

  /**
   * Retorna os dados de contato do site
   * 
   * @static
   * @returns 
   * @memberof defaultContentProvider
   */
  static async getcompanyContact() {
    return await fullPromise.onlyData('static/contents/contact.json');
  }
}