import { Test, TestingModule } from '@nestjs/testing';
import { ReplysController } from './replys.controller';

describe('ReplysController', () => {
  let controller: ReplysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReplysController],
    }).compile();

    controller = module.get<ReplysController>(ReplysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
