var isValidNewBlock = (newBlock, previousBlock) => {
	if (previousBlock.index + 1 !== newBlock.index) {
		return false;
	} else if (previousBlock.hash !== newBlock.previousHash) {
		return false;
	} else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
		return false;
	}
	return true;
};