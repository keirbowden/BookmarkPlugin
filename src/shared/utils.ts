import cli from 'cli-ux';
import { Bookmark } from './types';

export async function openBookmark(title : String, bookmarks : Array<Bookmark>, ux) {
    let bookmark;

    if (bookmarks.length>1) {
        ux.log('')
        ux.log('*****************************')
        ux.log(title);
        ux.log('');
        let chosenVal=-1;
        while (-1==chosenVal) {
            for (let idx=0; idx<bookmarks.length; idx++) {
              ux.log((idx + 1) + ') ' + bookmarks[idx].Name + ' [' + bookmarks[idx].Short_Code__c + '] - ' + bookmarks[idx].Description__c);
            }
            ux.log('');
            ux.log('0) Quit');
            let chosen=await cli.prompt('Choose a bookmark');
            chosenVal=Number.parseInt(chosen);
            if (Number.isInteger(chosenVal)) {
                if (0==chosenVal) {
                    process.exit(1);
                }
            }

            if ( (Number.isNaN(chosenVal)) || (chosenVal<0) || (chosenVal>bookmarks.length)) {
              ux.log('Please choose a value between 0 and ' + bookmarks.length);
              chosenVal=-1;
            }
        }
        bookmark=bookmarks[chosenVal-1];
    }
    else if (bookmarks.length==1) {
        bookmark=bookmarks[0];
    }
    else {
        ux.log('No bookmarks found');
    }

    if (bookmark) {
        ux.log('Opening ' + bookmark.Description__c);
        const open = require('open');

        await open(bookmark.URL__c);
    }
}

