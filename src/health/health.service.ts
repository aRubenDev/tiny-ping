import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>,
  ) {}
  async create(createHealthDto: CreateHealthDto) {
    const health = this.healthRepository.create(createHealthDto);
    return await this.healthRepository.save(health);
  }

  async findAll() {
    return await this.healthRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} health`;
  }

  async update(id: number, updateHealthDto: UpdateHealthDto) {
    return `This action updates a #${id} health`;
  }

  async remove(id: number) {
    return `This action removes a #${id} health`;
  }
}
