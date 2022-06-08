import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListOfContentsComponent extends Component {
  @tracked toshowlist = true;

  @action
  toggleList() {
    this.toggleProperty('toshowlist');
  }
}
