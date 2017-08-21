import { Adminv4Page } from './app.po';

describe('adminv4 App', () => {
  let page: Adminv4Page;

  beforeEach(() => {
    page = new Adminv4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
