import React from 'react';
import { expect } from 'chai';
import {
  render,
} from 'enzyme';

// from fixtures.js in 'cheerio'
const formsElement = (
  <div>
    <form id="simple"><input type="text" name="fruit" value="Apple" /></form>,
    <form id="nested"><div><input type="text" name="fruit" value="Apple" /></div><input type="text" name="vegetable" value="Carrot" /></form>,
    <form id="disabled"><input type="text" name="fruit" value="Apple" disabled /></form>,
    <form id="submit"><input type="text" name="fruit" value="Apple" /><input type="submit" name="submit" value="Submit" /></form>,
    <form id="select"><select name="fruit"><option value="Apple">Apple</option><option value="Orange" selected>Orange</option></select></form>,
    <form id="unnamed"><input type="text" name="fruit" value="Apple" /><input type="text" value="Carrot" /></form>,
    <form id="multiple"><select name="fruit" multiple><option value="Apple" selected>Apple</option><option value="Orange" selected>Orange</option><option value="Carrot">Carrot</option></select></form>,
    <form id="textarea"><textarea name="fruits" value="Apple\nOrange" /></form>,
    <form id="spaces"><input type="text" name="fruit" value="Blood orange" /></form>
  </div>
);

describe('render', () => {
  describe('find', () => {
    it('[disabled]', () => {
      expect(render(formsElement).find('[disabled]')).to.have.length(1);
    });

    it(':disabled', () => {
      expect(render(formsElement).find(':disabled')).to.have.length(1);
    });
  });

  describe('is', () => {
    it('[disabled]', () => {
      expect(render(formsElement).find('#disabled > input').is('[disabled]')).to.equal(true);
    });

    it(':disabled', () => {
      expect(render(formsElement).find('#disabled > input').is(':disabled')).to.equal(true);
    });
  });
});

