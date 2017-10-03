var getGenesisBlock = () => {
	return new Block(0, "0", (new Date().getTime() / 1000), "genesis block", "32r34r234r23523451234123");
}

var blockchain = [getGenesisBlock()];