import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataController } from './data/data.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the app
    }),
  ],
  controllers: [DataController],
  providers: [],
})
export class AppModule {}
