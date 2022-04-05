import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  private messages: Message[] = [{ name: 'Marius', text: 'heyoo' }];
  clientToUser = {};

  public create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(createMessageDto);
    return message;
  }

  public findAll() {
    return this.messages;
  }

  public getClientByName(name: string) {}

  public identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }
}
