import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findBy } from '@ember/array';

export default class PagesPageRoute extends Route {

  @service pageLists;

  model(params) {
    let { page_id } = params;
    let currentPage = this.pageLists.items.findBy('page_name', page_id);
    return currentPage;
  }

}
