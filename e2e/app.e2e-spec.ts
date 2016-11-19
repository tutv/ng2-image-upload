import { ImageUploadPage } from './app.po';

describe('image-upload App', function() {
  let page: ImageUploadPage;

  beforeEach(() => {
    page = new ImageUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
