import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface RentalImageArgs {}

export default class RentalImage extends Component<RentalImageArgs> {
  @tracked isLarge = false;

  constructor(owner: any, args: any) {
    super(owner, args);
    this.isLarge = false;
  }

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
