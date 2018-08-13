/* ===== Persist data with LevelDB ==================
|  Learn more: level: https://github.com/Level/level |
/===================================================*/

let level = require('level');
let chainDB = './chaindata';
let db = level(chainDB);

// Add data to levelDB with key/value pair
const addLevelDBData =  (key,value) =>{
  db.put(key, value, function(err) {
    if (err) return console.log('Block ' + key + ' submission failed', err);
  })
};

// Get data from levelDB with key
 const getLevelDBData = (key)=>{
  /* db.get(key, function(err, value) {
    if (err) return console.log('Not found!', err);
    //console.log(key, " == " ,value);
    var myvalue = JSON.parse(value);
    console.log("myvalue ",myvalue.hash);
  }) */
  
};

//https://github.com/Level/level#put

// Add data to levelDB with value
 const addDataToLevelDB = (value) =>{
    let i = 0;
    db.createReadStream().on('data', function(data) {
          i++;
        }).on('error', function(err) {
            return console.log('Unable to read data stream!', err)
        }).on('close', function() {
          console.log('Block #' + i);
          console.log("value ",value)
          addLevelDBData(i, value);
        });
};

const getBlockChainLength = ()=>{
    
    return new Promise(function(resolve,reject){
        var length = 0;
        db.createReadStream({ keys: true, values: true }).on('data', function(data) {
            console.log("data ",data);
            length++;
        }).on('error', function(err) {
            //console.log('Unable to read data stream!', err)
            reject(err)
        }).on('close', function() {
            console.log("getBlockChainLength ",length);
            resolve(length);
        });
    });
    

};
var getLength = async ()=>{
    var length = await getBlockChainLength();
    console.log("length ",length)

    getLevelDBData(length-1)
}
//getLength()
//console.log("ee ",getLength())
module.exports = {addLevelDBData,getLevelDBData,addDataToLevelDB,getBlockChainLength};