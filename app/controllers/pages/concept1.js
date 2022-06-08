import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PagesConcept1Controller extends Controller {
  @tracked isEditable = false;
}
