import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateDogTdo, Dog, DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: Dog) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findDogs(@Query('name') name: string) {
    return name ? this.dogsService.findOne(name) : this.dogsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: CreateDogTdo) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
