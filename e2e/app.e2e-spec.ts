import { AppPage } from './app.po';

//import '../src/app/app.component.spec'

describe('bsctest App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('partly custom? should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Notes Editor BSCTest');
  });
});
