import Route from '@ember/routing/route';

export default class Scientists extends Route {
  model() {
    return ['1', '2', '3'];
  }
}
