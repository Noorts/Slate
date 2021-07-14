import { Card } from './Card';

class InfoCard implements Card {
    public statusContent: string;
    public header: string;
    public organisation: string;
    public dateRange: string;
    public description: string;
    public cardImageUrl: string;

    constructor(statusContent: string = '', header: string = '', organisation: string = '',
                dateRange: string = '', description: string = '', cardImageUrl: string = '') {
            this.statusContent = statusContent;
            this.header = header;
            this.organisation = organisation;
            this.dateRange = dateRange;
            this.description = description;
            this.cardImageUrl = cardImageUrl;
        }
}

export { InfoCard };
