/**
 * Checks if the input ticket won the lottery
 * @param {Array.<{ticketString: string, ticketNumber: number}>} ticket 
 * @param {number} win 
 * @returns {string}
 */

function bingo(ticket, win){
    return ticket.reduce((acc, t) => acc += t[0].includes(String.fromCharCode(t[1])) ? 1 : 0, 0) >= win ? 'Winner!' : 'Loser!';
}
