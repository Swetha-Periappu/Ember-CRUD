import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PagesPageController extends Controller {
  @tracked isEditable = false;
}
