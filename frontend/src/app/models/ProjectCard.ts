import { Card } from './Card';

class ProjectCard implements Card {
    public header: string;
    public projectImageUrl: string;
    public description: string;
    public sourceImageUrl: string;
    public sourceUrl: string;

    constructor(
        header: string = '', projectImageUrl: string = '', description: string = '',
        sourceImageUrl: string = '', sourceUrl: string = ''
        ) {
            this.header = header;
            this.projectImageUrl = projectImageUrl;
            this.description = description;
            this.sourceImageUrl = sourceImageUrl;
            this.sourceUrl = sourceUrl;
        }
}

export { ProjectCard };
