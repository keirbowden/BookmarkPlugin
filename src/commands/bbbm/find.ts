import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import bookmarks = require('../../shared/bookmarks');
import utils = require('../../shared/utils');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('bbbookmarks', 'find');

export default class Find extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx bbbm:find -u ApexHoursDocs -t Develop 
  
*****************************
Find Results

1) LWC Dev Guide [LWCDG] - Official Lightning Web Components Developer Guide from Salesforce
2) Apex Dev Guide [APXDG] - Official Salesforce Apex Developer Guide

0) Quit
Choose a bookmark:`
  ];

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  public static args = [{name: 'file'}];

  protected static flagsConfig = {
    term: flags.string({char: 't', description: messages.getMessage('termFlagDescription')})
  };

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const conn = this.org.getConnection();
    const term = this.flags.term || '';
    
    const items=await bookmarks.findBookmarks(conn, term);

    utils.openBookmark(messages.getMessage('findTitle'), items, this.ux);

    // Return an object to be displayed with --json
    return { result: true };
  }
}
