import Component from '@glimmer/component';
import RentalModel from 'ember-quickstart/models/rental';

interface RentalsFilterArgs {
  rentals: RentalModel[];
  query: string;
}

export default class RentalsFilter extends Component<RentalsFilterArgs> {
  get results() {
    let {
      args: { rentals, query },
    } = this;

    return query
      ? rentals.filter((rental) => rental.title.includes(query))
      : rentals;
  }
}
