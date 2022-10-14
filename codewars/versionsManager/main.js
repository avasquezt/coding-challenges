const vm = initialVersion => new version(initialVersion);

class version{
  constructor(initialVersion){
    console.log(initialVersion);
    initialVersion = initialVersion || '0.0.1';
    initialVersion = initialVersion.split('.').slice(0, 3);
    for (let i = 0; i < initialVersion.length; i++){
      console.log(initialVersion[i])
      if (isNaN(initialVersion[i])){
        throw new Error('Error occured while parsing version!');
      }
    }
    this.majorVersion = [Number(initialVersion[0])];
    this.minorVersion = [Number(initialVersion[1]) || 0];
    this.patchVersion = [Number(initialVersion[2]) || 0];
  }
  release(){
    return `${this.majorVersion[this.majorVersion.length-1]}.${this.minorVersion[this.minorVersion.length-1]}.${this.patchVersion[this.patchVersion.length-1]}`;
  }
  major(){
    this.majorVersion.push(this.majorVersion[this.majorVersion.length-1] + 1);
    this.minorVersion.push(0);
    this.patchVersion.push(0);
    return this;
  }
  minor(){
    this.minorVersion.push(this.minorVersion[this.minorVersion.length-1] + 1);
    this.majorVersion.push(this.majorVersion[this.majorVersion.length-1]);
    this.patchVersion.push(0);
    return this;
  }
  patch(){
    this.patchVersion.push(this.patchVersion[this.patchVersion.length-1] + 1);
    this.majorVersion.push(this.majorVersion[this.majorVersion.length-1]);
    this.minorVersion.push(this.minorVersion[this.minorVersion.length-1]);
    return this;
  }
  rollback(){
    if(this.majorVersion.length > 1 && this.minorVersion.length > 1 && this.patchVersion.length > 1){
      this.majorVersion.pop();
      this.minorVersion.pop();
      this.patchVersion.pop();
    }else{
      throw new Error('Cannot rollback!');
    }
    return this;
  }
}