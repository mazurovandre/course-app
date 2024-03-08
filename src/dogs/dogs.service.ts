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

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  // update(id: number, updateDogDto: Dog) {
  //   return `This action updates a #${id} dog`;
  // }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
