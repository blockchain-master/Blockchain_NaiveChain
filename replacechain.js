var replaceChain = (newBlocks) => {
	if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
		blockchain = newBlocks;
		broadcast(responseLatestMsg());
	} else {
		console.log('Received blockchain invalid');
	}
}