import { Test, TestingModule } from '@nestjs/testing';
import { ConsumidoresController } from './consumidores.controller';
import { ConsumidoresService } from './consumidores.service';

describe('ConsumidoresController', () => {
  let controller: ConsumidoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumidoresController],
      providers: [ConsumidoresService],
    }).compile();

    controller = module.get<ConsumidoresController>(ConsumidoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
