/**
 * Utility class helpful for querying paging information related to an array
 */
class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.pageSize = itemsPerPage;
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.collection.length / this.pageSize);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    return (pageIndex > -1 && pageIndex < this.pageCount()) ? Math.min(this.pageSize, this.collection.length - this.pageSize * pageIndex) : -1;
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    return (itemIndex > -1 && itemIndex < this.collection.length) ? Math.floor(itemIndex / this.pageSize) : -1;
	}
}