import { AssessPage } from './app.po';

describe('assess App', () => {
  let page: AssessPage;

  beforeEach(() => {
    page = new AssessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
