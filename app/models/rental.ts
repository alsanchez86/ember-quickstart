import Model, { attr } from '@ember-data/model';
import { COMMUNITY_CATEGORIES } from 'ember-quickstart/constants';

export default class RentalModel extends Model {
  @attr title: any;
  @attr owner: any;
  @attr city: any;
  @attr category: any;
  @attr image: any;
  @attr bedrooms: any;
  @attr description: any;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
