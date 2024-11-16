import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CohereClient } from 'cohere-ai';

@Injectable()
export class OpenAIService {
  private readonly logger = new Logger(OpenAIService.name);
  private cohereApiKey: string;
  private cohereClient: CohereClient;

  constructor(private configService: ConfigService) {
    this.cohereApiKey = this.configService.get<string>('ai.cohere_key');
    this.cohereClient = new CohereClient({
      token: this.cohereApiKey,
    });
  }

  async getAIResponse(message: string): Promise<string> {
    try {
      const chat = await this.cohereClient.chat({
        model: 'command',
        message: message,
      });

      return chat.text.trim();
    } catch (error) {
      this.logger.error(`Error calling Cohere: ${error.message}`);
      throw new Error('Failed to get AI response');
    }
  }
}
