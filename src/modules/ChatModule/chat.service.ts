import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Chat, Message } from './chat.entity';
import { SendMessageDto } from './chat.dto';
import { OpenAIService } from '../AIModule/openAI.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,

    private openAIService: OpenAIService,
  ) {}

  async createChat(): Promise<Chat> {
    const chat = this.chatRepository.create();
    return this.chatRepository.save(chat);
  }

  async sendMessage(chatId: string, messageText: string): Promise<void> {
    let userMessage;
    try {
      userMessage = this.messageRepository.create({
        chat: { id: chatId },
        message: messageText,
        sender: 'user',
      });
      await this.messageRepository.save(userMessage);
    } catch (error) {
      throw new Error(`Failed to save user message: ${error.message}`);
    }

    await this.messageRepository.save(userMessage);

    const aiResponse =
      (await this.openAIService.getAIResponse(messageText)) ||
      'AI is unavailable. Please try again later.';

    const aiMessage = this.messageRepository.create({
      chat: { id: chatId },
      message: aiResponse,
      sender: 'ai',
    });

    console.log(aiResponse);

    await this.messageRepository.save(aiMessage);
  }

  async getAllChats(): Promise<Chat[]> {
    return this.chatRepository.find({ relations: ['messages'] });
  }

  async getChatById(id: string): Promise<Chat> {
    return this.chatRepository.findOne({
      where: { id },
      relations: ['messages'],
    });
  }

  async deleteChat(id: string): Promise<void> {
    await this.chatRepository.delete(id);
  }
}
