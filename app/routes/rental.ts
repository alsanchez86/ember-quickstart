import Route from '@ember/routing/route';

interface IRentalRouteParams {
  id: string;
}

export default class RentalRoute extends Route {
  async model(params: IRentalRouteParams) {
    let response = await fetch(`/api/rentals/${params.id}.json`);
    let { data } = await response.json();

    return data;
  }
}
