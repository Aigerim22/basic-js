const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res:[],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push('( ' + String(value) + ' )');
    return this;  
  },
  removeLink(position) {
    if(this.res[position - 1] == 'undefined' || typeof position !== 'number'){
      this.res=[];
      throw new Error;
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    const chain = this.res.join('~~');
    this.res = [];
    return chain;
  }
};

module.exports = chainMaker;
