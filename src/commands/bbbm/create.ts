import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import { Messages } from '@salesforce/core';
import Bookmarks = require('../../shared/bookmarks');
import { Bookmark } from '../../shared/types';
import { ErrorResult } from 'jsforce';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('bbbookmarks', 'create');

export default class Create extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx bbbm:shortcode
  `
  ];

  protected static flagsConfig = {
    name: flags.string({char: 'n', description: messages.getMessage('nameFlagDescription')}),
    description: flags.string({char: 'd', description: messages.getMessage('descriptionFlagDescription')}),
    shortcode: flags.string({char: 's', description: messages.getMessage('shortcodeFlagDescription')}),
    url: flags.string({char: 'l', description: messages.getMessage('urlFlagDescription')}),
    tags: flags.string({char: 't', description: messages.getMessage('tagsFlagDescription')})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const conn = this.org.getConnection();

    const bookmark: Bookmark={Name: this.flags.name || '',
                            Description__c: this.flags.description || '',
                            Short_Code__c: this.flags.shortcode || '',
                            URL__c: this.flags.url || '',
                            Tags__c: this.flags.tags || ''
                          };

    const opResult=await Bookmarks.createBookmark(conn, bookmark);

    if (!opResult.success) {
      this.ux.log(messages.getMessage('createError') + ' ' + JSON.stringify((<ErrorResult> opResult).errors));
    }
    else {
      this.ux.log(messages.getMessage('createSuccess'));
    }
                      
    // Return an object to be displayed with --json
    return { result: opResult.success };
  }
}
