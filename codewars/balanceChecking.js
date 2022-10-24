function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
    book = book.replace(/[^\w\. \n]/g, '');
    book = book.split('\n').filter(line => line.length);
    let initialBalance = newBalance = Number(book[0]);
    
    book = book.slice(1).map(line => `${line.split(' ').slice(0,2).join(' ')} ${Number(line.split(' ')[2]).toFixed(2)} Balance ${(newBalance -= Number(line.split(' ')[2])).toFixed(2)}`);
    
    book = [`Original Balance: ${initialBalance.toFixed(2)}`].concat(book);
    
    let totalExpense = initialBalance - newBalance;
    book = book.concat(`Total expense  ${(totalExpense).toFixed(2)}`);
    book = book.concat(`Average expense  ${(totalExpense / (book.length - 2)).toFixed(2)}`);
    
    return book.join('\r\n');
  }