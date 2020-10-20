import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';
export declare class IdeaController {
    private readonly ideaService;
    private logger;
    constructor(ideaService: IdeaService);
    ideasShowAll(): Promise<import("./idea.entity").IdeaEntity[]>;
    showAll(data: IdeaDTO): Promise<import("./idea.entity").IdeaEntity>;
    readIdea(id: string): Promise<import("./idea.entity").IdeaEntity>;
    updateIdea(id: string, data: Partial<IdeaDTO>): Promise<import("./idea.entity").IdeaEntity>;
    deleteIdea(id: string): Promise<import("./idea.entity").IdeaEntity>;
}