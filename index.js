const BTCMiner = require('bitcoin-miner');
// View this block in Block Explorer:  https://insight.bitpay.com/block/00000000000000000020cf2bdc6563fb25c424af588d5fb7223461e72715e4a9
// Get it in JSON format: https://insight.bitpay.com/api/block/00000000000000000020cf2bdc6563fb25c424af588d5fb7223461e72715e4a9
const block = {
    version: 1,
    previousblockhash: '000000004ebadb55ee9096c9a2f8880e09da59c0d68b1c228da88e48844a1485',
    merkleroot: '63522845d294ee9b0188ae5cac91bf389a0c3723f084ca1025e7d9cdfe481ce1',
    time: 1515252561,
    bits: '1d00ffff'
};

const miner = new BTCMiner(block);
let hash;
let found = false;


let nonce = 45281998 // initial nonce
while (!found) { 
    hash = miner.getHash(nonce);
    console.log(hash.toString('hex'));
    document.getElementById('hash').textContent = hash.toString('hex');
    found = miner.checkHash(hash);
    if (found) {
		miner.verifyNonce(block, nonce);
	}
    nonce++;
}
