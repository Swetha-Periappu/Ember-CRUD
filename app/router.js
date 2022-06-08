import EmberRouter from '@ember/routing/router';
import config from 'task-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('pages', function () {
    this.route('getting-started');
    this.route('tutorial');
    this.route('summary');
    this.route('concept1');
    this.route('concept2');
    this.route('concept3');
  });
  
});
