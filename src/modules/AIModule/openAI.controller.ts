import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from './openAI.service';

@Controller('ai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post('/send_message')
  async sendMessage(@Body() body: { messageText: string }) {
    const aiResponse = await this.openAIService.getAIResponse(body.messageText);
    return { aiResponse };
  }
}
