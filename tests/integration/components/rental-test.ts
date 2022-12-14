import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental detailed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function (assert) {
    const data = {
      id: 'grand-old-mansion',
      type: 'rentals',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: '15',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    };

    this.setProperties({
      data,
    });

    await render(hbs`<Rental @rental={{this.data}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3 a').hasText(data.title);
    assert.dom('article h3 a').hasAttribute('href', `/rentals/${data.id}`);
    assert.dom('article .detail.owner').includesText(data.owner);
    assert.dom('article .detail.bedrooms').includesText(data.bedrooms);
    assert.dom('article .image').exists();
  });
});
