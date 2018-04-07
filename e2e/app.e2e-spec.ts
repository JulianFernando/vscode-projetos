import { AppPage } from './app.po';

describe('meu-primeiro-projeto App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bem Vindo a Aplicação Angular 2 - Padrão!');
  });
});
