import {by, element} from 'protractor';

export class PlayerPage {

    getHeaderText() {
        return element(by.css('app-career p')).getText() as Promise<string>;
      }


}