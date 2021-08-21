import { Card } from './Card';

class ProjectCard implements Card {
    public header: string;
    public description: string;
    public repositoryUrl: string;
    public cardImage: {
        url: string
    };
    public order: number;

    constructor(
        header: string = '', description: string = '', repositoryUrl: string = '', order: number = null,
        cardImage: {
            url: string
        } = {
                url: ''
            }
        ) {
            this.header = header;
            this.description = description;
            this.repositoryUrl = repositoryUrl;
            this.cardImage = cardImage;
            this.order = order;
        }
}

export { ProjectCard };
