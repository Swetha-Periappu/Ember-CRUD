import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PagesSummaryController extends Controller {
  @tracked isEditable = false;

}
