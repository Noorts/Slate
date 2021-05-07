import { InfoCard } from './InfoCard';

class ContentBlock {
    public blockHeader: string;
    public infoCards: InfoCard[];

    constructor(blockHeader: string = '', infoCards: InfoCard[] = []) {
        this.blockHeader = blockHeader;
        this.infoCards = infoCards;
    }
}

export { ContentBlock };
