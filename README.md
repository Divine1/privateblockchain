private blockchain project


`var bl = new Blockchain();`


//add new block to the blockchain network
    `bl.addBlock(new Block("my second block"))`

//create first block. This first block in block chain is called as the genesis block.
    `genesis block is persisted via constructor`

//validate block stored within leveldb
    `bl.validateChain()`

//validate entire blockchain
//i have used async/await for db interactions, so we need to use promises to access the return value
    //bl.validateBlock(3).then(data => console.log("validateBlock ",data))

//get block for given height as input
//i have used async/await for db interactions, so we need to use promises to access the return value
    `bl.getBlock(3).then( data => console.log("then getBlock ",data))`

//get total blockheight in blockchain
//i have used async/await for db interactions, so we need to use promises to access the return value
    `bl.getBlockHeight().then( data => console.log("then getBlockHeight ",data))`



