import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PagesGettingStartedController extends Controller {
  @tracked isEditable = false;

  @action 
  save(value){
    this.send('saveEdits', value);
  }
}
