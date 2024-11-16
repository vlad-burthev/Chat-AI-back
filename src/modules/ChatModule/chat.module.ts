import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat, Message } from './chat.entity';
import { OpenAIModule } from '../AIModule/openAI.module';
import { OpenAIService } from '../AIModule/openAI.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Message]), OpenAIModule],
  controllers: [ChatController],
  providers: [ChatService, OpenAIService],
})
export class ChatModule {}
