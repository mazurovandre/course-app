import { Injectable } from '@nestjs/common';

export interface CreateDogTdo {
  name: string;
  breed: string;
}

export interface Dog {
  id: number;
  name: string;
  breed: string;
}

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(createDogTdo: CreateDogTdo) {
    const dog: Dog = {
      id: Date.now(),
      ...createDogTdo,
    };

    return this.dogs.push(dog);
  }

  findAll() {
    return this.dogs;
  }

  findOne(name: string) {
    const target = this.dogs.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    return target || 'Dog not found';
  }

  update(id: number, updateDogDto: CreateDogTdo) {
    const index = this.dogs.findIndex((item) => item.id === id);
    this.dogs[index] = {
      ...this.dogs[index],
      ...updateDogDto,
    };

    return index >= 0 ? this.dogs[index] : 'Dog not found';
  }

  remove(id: number) {
    const index = this.dogs.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.dogs.splice(index, 1);
    }

    return index >= 0 ? `This action removes a #${id} dog` : 'Dog not found';
  }
}
