import { Test, TestingModule } from '@nestjs/testing';
import { ConsumidoresService } from './consumidores.service';

describe('ConsumidoresService', () => {
  let service: ConsumidoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumidoresService],
    }).compile();

    service = module.get<ConsumidoresService>(ConsumidoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
