import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pelis-listing', 'Integration | Component | pelis listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pelis-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pelis-listing}}
      template block text
    {{/pelis-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
