import {ok, notFound, serverError} from 'wix-http-functions'; // expose API with 3 responses (https://www.wix.com/corvid/reference/wix-http-functions.html)
import wixData from 'wix-data'; // import Wix data from stores
// Allow GET request from https://www.example.com/_functions-dev/order/ and set it to JSON
export function get_order(request) {
	let options = {
     "headers": {
       "Content-Type": "application/json"
     },
		 "suppressAuth": true,  // prevents permission checks from running
	   "suppressHooks": true  // prevents hooks from running
   };
   
  // run a query (https://www.wix.com/corvid/reference/wix-data.html)
	// Stores>Orders collection (https://support.wix.com/en/article/corvid-wix-stores-orders-collection-fields)
   return wixData.query("NewDatabase")
      .descending("number")  // sort high to low
	 	 .limit(400)  // some limit is required
      .ne("fulfillmentStatus", "CANCELED")  // don't get Canceled orders
      .gt("number", 111471)  // query greater than
      //.lt("number", 111251)  // query less than
      //.hasSome("number", [104189,104362])  // find specific order ids
     .find()
     .then( (results) => {
       // matching items were found
       if(results.items.length > 0) {
         options.body = {
           "items": results.items
         };
         return ok(options);
       }
       // no matching items found
       options.body = {
         "error": `no orders`
       };
       return notFound(options);
     } )
     // something went wrong
     .catch( (error) => {
       options.body = {
         "error": error
       };
       return serverError(options);
     } );

 }
