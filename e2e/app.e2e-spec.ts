import { CarouselTestPage } from './app.po';

describe('carousel-test App', () => {
  let page: CarouselTestPage;

  beforeEach(() => {
    page = new CarouselTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
