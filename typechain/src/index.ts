import crypto from 'crypto';


interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    prevHash: string;
    height: number;
    data: string;

    constructor(hash: string, prevHash: string, height: number, data: string) {
        this.hash = Block.calulateHash(prevHash, height, data);
    }

    static calulateHash = (prevHash: string, height: number, data: string): string => {
        const crypto = require('crypto');
    }
}



