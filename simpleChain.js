const sha256 = require("crypto-js/sha256")
const {addLevelDBData,getLevelDBData,addDataToLevelDB,getBlockChainLength} =require("./levelSandbox");

class Block{
  constructor(data){
    this.hash = "";
    this.height = 0;
    this.body = data;
    this.time = 0;
    this.previousBlockhash= "";
  }
}

class Blockchain{
	constructor(){
    	this.chain = [];
      	this.addBlock(new Block("my first block"));
    }
  	async addBlock(newBlock){
        const chainLength = await getBlockChainLength();
        newBlock.height = chainLength;
        newBlock.time = new Date().getTime().toString().slice(0,-3);
        if(chainLength >0){
            newBlock.previousBlockhash = getLevelDBData(chainLength - 1).hash;
        }
        newBlock.hash = sha256(JSON.stringify(newBlock)).toString();
        //this.chain.push(newBlock);
        addDataToLevelDB(JSON.stringify(newBlock));
    }
}

//new Blockchain()
//getBlockChainLength()
//var getLevelDBData(0)