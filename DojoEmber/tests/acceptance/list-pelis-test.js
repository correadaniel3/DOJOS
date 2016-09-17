import { test } from 'qunit';
import moduleForAcceptance from 'dojo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list pelis');

test('should redirect to pelis route', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/pelis','should redirect automatically');
  });
});

test('should list available movies', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length,5,'should list movies');
  });
});
