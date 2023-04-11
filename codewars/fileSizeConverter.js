/**
 * Class to manage file sizes between B, KB, MB, GB and TB
 */
class Converter {
    constructor(number, unit){
      this.number = number;
      this.unit = unit;
    }
    
    get size() {
      return (Math.floor(this.number * 1000) / 1000) + ' ' + this.unit;
    }
    
    toB(){
      const unit = this.unit;
      this.unit = 'B';
      switch(unit){
          case 'KB':
            this.number = this.number * 1024;
            break;
          case 'MB':
            this.number = this.number * 1024 ** 2;
            break;
          case 'GB':
            this.number = this.number * 1024 ** 3;
            break;
          case 'TB':
            this.number = this.number * 1024 ** 4;
            break;
      }
    };
    
    toKB(){
      this.toB();
      this.number = this.number / 1024;
      this.unit = 'KB';
    }
    
    toMB(){
      this.toB();
      this.number = this.number / 1024 ** 2;
      this.unit = 'MB';
    }
    
    toGB(){
      this.toB();
      this.number = this.number / 1024 ** 3;
      this.unit = 'GB';
    }
    
    toTB(){
      this.toB();
      this.number = this.number / 1024 ** 4;
      this.unit = 'TB';
    }
  }