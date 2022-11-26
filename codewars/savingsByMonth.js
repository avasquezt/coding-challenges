function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let totalSavings = 0;
    let months = 0;
    while((totalSavings + startPriceOld) < startPriceNew){
      months++;
      percentLossByMonth += months % 2 ? 0 : 0.5;
      startPriceOld -= startPriceOld * (percentLossByMonth / 100);
      startPriceNew -= startPriceNew * (percentLossByMonth / 100);
      totalSavings += savingperMonth;
    }
    return [months, Math.round((totalSavings + startPriceOld) - startPriceNew)];
  }