'use strict';
import assert from 'power-assert';
import { CheckBoxComponent } from './Checkbox';
import { components as comps } from './fixtures/index';
import { Harness } from '../../../test/harness';
describe('Checkbox Component', function() {
  it('Should build a checkbox component', function(done) {
    Harness.testCreate(CheckBoxComponent, comps.comp1).then((component) => {
      let inputs = Harness.testElements(component, 'input[type="checkbox"]', 1);
      for (let i=0; i < inputs.length; i++) {
        assert(inputs[i].getAttribute('class').indexOf('form-check-input') !== -1, 'No form-check-input class');
        assert.equal(inputs[i].name, 'data[' + comps.comp1.key + ']');
      }
      Harness.testElements(component, 'span', 1);
      done();

    });
  });

  it('Span should have correct text label', function(done) {
    Harness.testCreate(CheckBoxComponent, comps.comp1).then((component) => {
      let componentClass = component.element.getAttribute('class');
      assert(componentClass.indexOf('form-check') !== -1, 'No form-check class.');
      let labels = component.element.querySelectorAll('label');
      assert.equal(labels.length, 1);
      assert(labels[0].getAttribute('class').indexOf('form-check-label') !== -1, 'No form-check-label class');
      let spans = labels[0].querySelectorAll('span');
      assert.equal(spans.length, 1);
      assert.equal(spans[0].innerHTML, 'Check me');
      done();
    });
  });

  it('Should be able to set and get data', function(done) {
    Harness.testCreate(CheckBoxComponent, comps.comp1).then((component) => {
      Harness.testSetGet(component, 1);
      Harness.testSetGet(component, 0);
      done();
    });
  });
});
