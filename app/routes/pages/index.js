import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PagesIndexRoute extends Route {
  @service pageLists;

  model() {
    return this.pageLists;
  }
}
