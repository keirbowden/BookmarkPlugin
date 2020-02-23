import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import { Messages } from '@salesforce/core';
import Bookmarks = require('../../shared/bookmarks');
import Utils = require('../../shared/utils');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('bbbookmarks', 'shortcode');

export default class ShortCode extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
    `$ sfdx bbbm:shortcode -u ApexHoursDoc -c Blog 
  Opening Bob Buzzard Blog Homepage`
  ];

  public static args = [{name: 'file'}];ˆ

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    code: flags.string({char: 's', description: messages.getMessage('shortcodeFlagDescription')})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const conn = this.org.getConnection();

    const code = this.flags.code || '';
    
    const items=await Bookmarks.getBookmarkByShortCode(conn, code);

    Utils.openBookmark(messages.getMessage('shortCodeTitle'), items, this.ux);

    // Return an object to be displayed with --json
    return { result: true };
  }
}
