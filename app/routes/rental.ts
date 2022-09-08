import Route from '@ember/routing/route';
import { service } from '@ember/service';

interface RentalRouteParams {
  id: string;
}

export default class RentalRoute extends Route {
  @service store: any;
  async model(params: RentalRouteParams) {
    return this.store.findRecord('rental', params.id);
  }
}
