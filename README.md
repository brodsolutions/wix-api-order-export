# wix-api-order-export
## The only way export order data from Wix Stores API

Orders collection is restricted to only Wix website, you cannot setup an API to send this order information out. In my case, I'm not able to send order information to an ERP system automatically.

To solve this issue, a custom collection with propers permissions is created. Then data.js duplicates the Order collection row by row when querying (scrolling and loading) into the new collection (NewDatabase).

http-functions is setup to expose this information through Wix API and referencing the NewDatabase. Optionally, you can set parameters to get the orders you'd like, for me that is by order number.

My ERP API now has data to look through. Unfortunately, there is a manual step, that is frustrating but much less work than hand-copying order data:  A user must open the Orders collection and actually scroll through the data for it to get duplicated into another collection.

This is working as of June 11, 2020. *It could either get taken down by Wix or Wix could enable Order collection to be exposed via API.*
