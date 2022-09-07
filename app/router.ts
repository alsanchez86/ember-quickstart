import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Its not neccesary to put a route to index lading page (route '/')
  this.route('scientists');
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('rental', { path: '/rentals/:id' });
});
