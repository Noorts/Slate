import { Card } from './Card';

class InfoCard implements Card {
    public statusContent: string;
    public header: string;
    public organisation: string;
    public dateRange: string;
    public introText: string;
    public description: string;
    public orgImage: {
        url: string
    };
    public order: number;

    constructor(statusContent: string = '', header: string = '', organisation: string = '', dateRange: string = '',
                introText: string = '', description: string = '', order: number = null,
                orgImage: {
                    url: string
                } = { url: '' }
    ) {
            this.statusContent = statusContent;
            this.header = header;
            this.organisation = organisation;
            this.dateRange = dateRange;
            this.introText = introText;
            this.description = description;
            this.orgImage = orgImage;
            this.order = order;
        }
}

export { InfoCard };
