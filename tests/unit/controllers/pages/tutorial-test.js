import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | pages/tutorial', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:pages/tutorial');
    assert.ok(controller);
  });
});
