import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pages/summary', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pages/summary');
    assert.ok(route);
  });
});
