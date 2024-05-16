import { Test, TestingModule } from '@nestjs/testing';
import { ReplysService } from './replys.service';

describe('ReplysService', () => {
  let service: ReplysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplysService],
    }).compile();

    service = module.get<ReplysService>(ReplysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
