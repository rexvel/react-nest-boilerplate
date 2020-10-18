import { Repository } from 'typeorm';
import { IdeaDTO } from '../idea.dto';
import { IdeaEntity } from './../idea.entity';
export declare class IdeaService {
    private readonly ideaRepository;
    constructor(ideaRepository: Repository<IdeaEntity>);
    showAll(): Promise<IdeaEntity[]>;
    create(data: IdeaDTO): Promise<IdeaEntity>;
    read(id: string): Promise<IdeaEntity>;
    update(id: string, data: Partial<IdeaDTO>): Promise<IdeaEntity>;
    delete(id: string): Promise<IdeaEntity>;
}
