import { AngularKarmaJasminePage } from './app.po';

describe('Welcome to Angular Unit Testing!', () => {
  let page: AngularKarmaJasminePage;

  beforeEach(() => {
    page = new AngularKarmaJasminePage();
  });

  it('Welcome to Angular Unit Testing!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Unit Testing!');
  });
});
