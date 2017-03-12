import { TangSooDoPage } from './app.po';

describe('tang-soo-do App', () => {
  let page: TangSooDoPage;

  beforeEach(() => {
    page = new TangSooDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
