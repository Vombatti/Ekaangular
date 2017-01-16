import { EkaangularPage } from './app.po';

describe('ekaangular App', function() {
  let page: EkaangularPage;

  beforeEach(() => {
    page = new EkaangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
