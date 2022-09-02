import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | scientists', function (hooks: any) {
  setupTest(hooks);

  test('it exists', function (assert: any) {
    let route = this.owner.lookup('route:scientists');
    assert.ok(route);
  });
});
