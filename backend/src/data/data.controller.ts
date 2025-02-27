import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Get()
  getData() {
    const currentDate = new Date().toISOString(); // Get current date-time in ISO format
    return {
      message: 'This is your data from NestJS-App A!',
      timestamp: currentDate,
    };
  }
}
