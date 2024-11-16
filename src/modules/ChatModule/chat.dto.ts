import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty({ message: 'chatId не может быть пустым' })
  @IsUUID('4', { message: 'chatId должен быть UUID версии 4' })
  chatId: string;

  @IsNotEmpty({ message: 'messageText не может быть пустым' })
  @IsString({ message: 'messageText должен быть строкой' })
  messageText: string;
}
