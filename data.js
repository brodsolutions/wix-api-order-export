import wixData from 'wix-data';

// After Orders are queried
export function Stores$Orders_afterQuery(item, context) {
	let hookContext = context;
	let toInsert = item;

  // insert data into second collection
wixData.insert("NewDatabase", toInsert)
  .then( (results) => {
		let item = results;
	} )
	.catch( (err) => {
		let errorMsg = err;
	} );
}
