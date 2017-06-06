import { MyAngularPage } from './app.po';

describe('my-angular App', () => {
  let page: MyAngularPage;

  beforeEach(() => {
    page = new MyAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
