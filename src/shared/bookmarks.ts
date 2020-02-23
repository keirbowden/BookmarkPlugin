import { Bookmark } from './types';
import { Connection, RecordResult } from 'jsforce';

export async function getBookmarkByShortCode(conn: Connection, shortCode : String): Promise<Array<Bookmark>> {

  const query = 'Select Name, Description__c, Short_Code__c, URL__c from Bookmark__c where Short_Code__c=\'' + shortCode + '\'';

  const result = await conn.query<Bookmark>(query);

  let items=result.records;

  if (!items)
  {
      items=[];
  }

  return items;
}

export async function getAllBookmarks(conn: Connection): Promise<Array<Bookmark>> {

  const query = 'Select Name, Description__c, Short_Code__c, URL__c from Bookmark__c';

  const result = await conn.query<Bookmark>(query);

  let items=result.records;

  if (!items)
  {
      items=[];
  }

  return items;
}

export async function findBookmarks(conn: Connection, term: string): Promise<Array<Bookmark>> {

  const query = 'Select Name, Description__c, Short_Code__c, URL__c from Bookmark__c where ' + 
                'Name like \'%' + term + '%\' or Description__c like \'%' + term + '%\' or ' + 
                'Tags__c like \'%' + term + '%\'';

  const result = await conn.query<Bookmark>(query);

  let items=result.records;

  if (!items)
  {
      items=[];
  }

  return items;
}

export async function createBookmark(conn: Connection, bookmark: Bookmark): Promise<RecordResult> {
  let opResult: RecordResult =await conn.sobject('Bookmark__c').insert(bookmark);

  return opResult;
}