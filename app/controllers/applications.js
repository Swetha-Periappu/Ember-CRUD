import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationsController extends Controller {
  @tracked contentList = [
    { route: 'getting-started', content: 'Getting Started' },
    { route: 'tutorial', content: 'Tutorial' },
    { route: 'concept1', content: 'Concept 1' },
    { route: 'concept2', content: 'Concept 2' },
    { route: 'concept3', content: 'Concept 3' },
    { route: 'summary', content: 'Summary' },
  ];

  // @action
  // addContent(listContent){
  //     console.log(listContent);
  //     this.contentlist.pushObject({
  //         route: '',
  //         content: listContent,
  //     });
  //     console.log(this.contentlist);
  // }
}
