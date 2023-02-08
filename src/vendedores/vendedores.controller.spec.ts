import { Test, TestingModule } from '@nestjs/testing';
import { VendedoresController } from './vendedores.controller';
import { VendedoresService } from './vendedores.service';

describe('VendedoresController', () => {
  let controller: VendedoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendedoresController],
      providers: [VendedoresService],
    }).compile();

    controller = module.get<VendedoresController>(VendedoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
