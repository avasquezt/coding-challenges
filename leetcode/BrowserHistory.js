/**
 * BrowserHistory class implementation
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.pages = [homepage];
    this.currPage = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.currPage++;
    this.pages = this.pages.slice(0,this.currPage);
    this.pages.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currPage = Math.max(0, this.currPage - steps);
    return this.pages[this.currPage];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currPage = Math.min(this.currPage + steps, this.pages.length - 1);
    return this.pages[this.currPage];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */