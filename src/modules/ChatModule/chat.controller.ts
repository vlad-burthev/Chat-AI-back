import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto } from './chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/create')
  async createChat() {
    return this.chatService.createChat();
  }

  @Get('/all')
  async getAllChats() {
    return this.chatService.getAllChats();
  }

  @Post('/send_message')
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.chatService.sendMessage(
      sendMessageDto.chatId,
      sendMessageDto.messageText,
    );
  }

  @Get('/:id')
  async getChatById(@Param('id') id: string) {
    return this.chatService.getChatById(id);
  }

  @Delete('/:id')
  async deleteChat(@Param('id') id: string) {
    return this.chatService.deleteChat(id);
  }
}
