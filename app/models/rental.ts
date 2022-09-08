import Model, { attr } from '@ember-data/model';
import { COMMUNITY_CATEGORIES } from 'ember-quickstart/constants';

export default class RentalModel extends Model {
  @attr('string') title: any;
  @attr('string') owner: any;
  @attr('string') city: any;
  @attr('string') category: any;
  @attr('string') image: any;
  @attr('string') bedrooms: any;
  @attr('string') description: any;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
