import { Module } from '@nestjs/common';
import { OpenAIService } from './openAI.service';
import { OpenAIController } from './openAI.controller';

@Module({
  controllers: [OpenAIController],
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class OpenAIModule {}
