import { AngularPagingSamplePage } from './app.po';

describe('angular-paging-sample App', function() {
  let page: AngularPagingSamplePage;

  beforeEach(() => {
    page = new AngularPagingSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
