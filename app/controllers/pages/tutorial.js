import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PagesTutorialController extends Controller {
  @tracked isEditable = false;

  @action 
  save(value){
    this.send('saveEdits', value);
  }
}
