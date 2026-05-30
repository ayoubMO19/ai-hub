import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const config = new DocumentBuilder()
    .setTitle('AI Hub API')
    .setDescription(`
  ## AI Models Intelligence API

  REST API that aggregates and normalizes data from multiple AI model providers.
  Real-time rankings, pricing comparisons, and model capabilities.

  ### Features
  - 🔄 Auto-sync from OpenRouter & HuggingFace every 6 hours
  - ⚡ Redis-cached rankings (15min TTL)
  - 🔐 JWT authentication with refresh tokens
  - 📊 Dynamic rankings: cheapest, fastest, largest context

  ### Rate limiting
  100 requests / 60 seconds per IP
    `)
    .setVersion('1.0.0')
    .setContact('AI Hub', 'https://github.com/tuuser/ai-hub', 'tu@email.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000', 'Development')
    .addServer('https://api.tudominio.com', 'Production')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT access token',
      },
      'JWT',
    )
    .addTag('health', 'API status and health checks')
    .addTag('auth', 'Authentication and authorization')
    .addTag('models', 'AI model data and search')
    .addTag('rankings', 'Dynamic model rankings')
    .addTag('providers', 'AI providers information')
    .addTag('watchlist', 'User saved models')
    .addTag('sync', 'Data synchronization status')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application running on http://localhost:${port}/api/v1`);
  logger.log(`Swagger docs at http://localhost:${port}/api/docs`);
}
bootstrap();
