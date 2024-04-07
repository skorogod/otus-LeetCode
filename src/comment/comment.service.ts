import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>
  ){}

  async create(createCommentDto: CreateCommentDto) {
    const comment = this.repository.create(createCommentDto);
    return await this.repository.save(comment)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const comment = await this.repository.findOneBy({id});
    if (!comment) {
      throw new NotFoundException('Comment Not Found')
    }
    return comment
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    let comment = await this.repository.findOneBy({id})
    if (!comment) {
      throw new NotFoundException('Comment Not Found')
    }
    comment = this.repository.merge(comment, updateCommentDto)
    return await this.repository.save(comment);
  }

  async remove(id: number) {
    const comment = await this.repository.delete(id);
    if (!comment.affected) {
      throw new NotFoundException("Comment Not Found")
    }
    return comment;
  }
}
