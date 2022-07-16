import { instance } from '../basicApi/basicApi';

export default class Restaurants {
  async allRestaurants() {
    const path = '/restaurants.json';

    return instance.get(path);
  }
}
