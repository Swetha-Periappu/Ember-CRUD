import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ListOfContentsComponent extends Component {
  @tracked toshowlist = true;

  @action
  toggleList() {
    this.toggleProperty('toshowlist');
  }

  @service pageLists;

  @tracked listContent = null;

  @action
  addListContent() {
    console.log(this.pageLists);
    this.listContent = document.getElementById('listField').value;
    this.pageLists.add({
      route: 'pages.page',
      page_name: this.listContent,
      title: this.listContent,
      content: '',
    });
    document.getElementById('listField').value = '';
  }
}
