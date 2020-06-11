# wix-api-order-export
## The only way export order data from Wix Stores API

### Background
Database>Stores>Orders collection is restricted to only Wix website, you cannot setup an API to send this order information out due to locked permissions. In my case, I'm not able to send order information to an ERP system via API.

### Solution
Enable Corvid and access files under Edit Site.

#### Add New Collection
* Name:  [Name]
* Collection ID: autofilled
* Site Content: Site Content

#### Create Query Duplication
Under Backend, add a new file called data.js
Make sure to write in new collection ```wixData.insert("[Name]", toInsert)```

This script copies the Orders collection in the new Collection row by row when **querying = opening the Orders collection and scrolling/loading rows**. Review your new collection to see if working.

#### Create the API
Under Backend, add a new file called http-fuctions.js
http-functions is setup to expose this information through Wix API and referencing the NewDatabase. Optionally, you can set parameters to get the orders you'd like, for me that is by order number.

### Result
You can now send Order Data via API after querying the Orders Collection and updating the API filters. Yes, this unfortunately requires a manual steps, but it much less work than hand-copying order data.

This is working as of June 11, 2020. Hope it helps you and your clients. *It could either get taken down by Wix or Wix could enable Order collection to be exposed via API. Please comment on this repo if either happens.*
