import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | pages/concept1', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:pages/concept1');
    assert.ok(controller);
  });
});
