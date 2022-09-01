import Route from '@ember/routing/route';

export default class Scientists extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    return ['1', '2', '3'];
  }
}
