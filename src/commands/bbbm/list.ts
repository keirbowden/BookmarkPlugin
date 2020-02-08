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
  `$ sfdx bbbm:all 
  `
  ];

  public static args = [{name: 'file'}];ˆ

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const conn = this.org.getConnection();

    const bookmarks=await Bookmarks.getAllBookmarks(conn);

    Utils.openBookmark('All bookmarks', bookmarks, this.ux);

    // Return an object to be displayed with --json
    return { result: true };
  }
}
