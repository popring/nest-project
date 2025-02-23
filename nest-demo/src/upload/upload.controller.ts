import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'uploads',
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    console.log('body', body);
    console.log('file', file);
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('file', 10, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: any,
  ) {
    console.log('body', body);
    console.log('files', files);
  }
}
