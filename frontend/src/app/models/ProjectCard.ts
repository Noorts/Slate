import { Card } from './Card';

class ProjectCard implements Card {
    public header: string;
    public description: string;
    public repositoryUrl: string;
    public cardImage: {
        url: string
    };

    constructor(
        header: string = '', description: string = '', repositoryUrl: string = '',
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
        }
}

export { ProjectCard };
