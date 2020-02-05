import { browser, by, element, $ } from 'protractor';

export class AppPage {
  
  
  id = $('input[name="player"]');
  submit = element(by.buttonText('Search'));

  playerFind(id: string): void {
    this.id.sendKeys(id);
    this.submit.click();
  }
  
  
   
  
  navigateToPlayer() {
    return browser.get('/home') as Promise<any>;
  }

  
}
