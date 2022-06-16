import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | paths/:path-id', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:paths/:path-id');
    assert.ok(route);
  });
});
