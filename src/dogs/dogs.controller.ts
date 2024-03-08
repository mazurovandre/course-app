import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Dog, DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: Dog) {
    console.log('===>', createDogDto);
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
  //   return this.dogsService.update(+id, updateDogDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
