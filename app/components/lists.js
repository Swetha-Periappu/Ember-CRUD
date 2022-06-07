import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListsComponent extends Component {
  @tracked contentLists = [
    { route: 'pages.getting-started', content: 'Getting Started' },
    { route: 'pages.tutorial', content: 'Tutorial' },
    { route: 'pages.concept1', content: 'Concept 1' },
    { route: 'pages.concept2', content: 'Concept 2' },
    { route: 'pages.concept3', content: 'Concept 3' },
    { route: 'pages.summary', content: 'Summary' },
  ];

  @tracked listContent;

  @action
  addListContent() {
    this.listContent = document.getElementById('listField').value;
    console.log(this.listContent);
    this.contentLists.pushObject({
      route: 'pages.tutorial',
      content: this.listContent,
    });
    document.getElementById('listField').value = '';
  }
}
