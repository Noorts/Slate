import { Card } from './Card';

class ContentBlock {
    public blockHeader: string;
    public contentType: string;
    public cards: Card[];

    constructor(blockHeader: string = '', contentType: string = '', cards: Card[] = []) {
        this.blockHeader = blockHeader;
        this.contentType = contentType;
        this.cards = cards;
    }
}

export { ContentBlock };
