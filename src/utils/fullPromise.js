import axios from 'axios';

/**
 * 
 * 
 * @export
 * @class fullPromise
 */
export default class fullPromise {
   /**
    * 
    * 
    * @static
    * @param {any} link 
    * @returns 
    * @memberof fullPromise
   
    * 
    */
  static async onlyData (link) {
    try {
      return await axios.get(link).then(res => {
        if(res.status !== 200) {
          throw new Error('Erro ao trazer os dados');
        }
        return res.data;
      });
    } catch (error) {
      console.error(error);
    }
  }
}