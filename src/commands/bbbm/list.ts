import { SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import { Messages } from '@salesforce/core';
import Bookmarks = require('../../shared/bookmarks');
import Utils = require('../../shared/utils');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('bbbookmarks', 'list');

export default class List extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
    `$ sfdx bbbm:find -u ApexHoursDocs
  
*****************************
All bookmarks

1) Bob Buzzard Blog [BLOG] - Bob Buzzard Blog Homepage
2) LWC Dev Guide [LWCDG] - Official Lightning Web Components Developer Guide from Salesforce
3) Apex Dev Guide [APXDG] - Official Salesforce Apex Developer Guide
4) Google [GGL] - Google home page

0) Quit
Choose a bookmark:`
];

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const conn = this.org.getConnection();

    const bookmarks=await Bookmarks.getAllBookmarks(conn);

    Utils.openBookmark(messages.getMessage('listTitle'), bookmarks, this.ux);

    // Return an object to be displayed with --json
    return { result: true };
  }
}
