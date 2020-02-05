import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { PlayerPage } from './player.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let playerPage: PlayerPage;

  beforeEach(() => {
    page = new AppPage();

    
  });

  it('should navigate to home and search player', () => {
    page.navigateToPlayer();
    page.playerFind('PUBG_Babin3c');

    const url = browser.getCurrentUrl();
    expect(url).toContain('players?player=PUBG_Babin3c');
    browser.pause();

    playerPage = new PlayerPage();

    expect(playerPage.getHeaderText()).toEqual('Season 5');
    

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
