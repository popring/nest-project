import {
  Body,
  Controller,
  Get,
  Ip,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OtherService } from './other.service';
import { LoginGuard } from 'src/login.guard';
import { TimeInterceptor } from 'src/time.interceptor';
import { ValidatePipe } from 'src/validate.pipe';
import { TestFilter } from 'src/test.filter';

@Controller('other')
export class OtherController {
  constructor(private readonly otherService: OtherService) {}

  @Get('/')
  getOther() {
    return this.otherService.getOther();
  }

  @Get('/forbidden')
  @UseGuards(LoginGuard)
  getOtherForbidden() {
    return this.otherService.getOtherForbidden();
  }

  @Get('/interceptor')
  @UseInterceptors(TimeInterceptor)
  getOtherInterceptor() {
    return this.otherService.getOtherInterceptor();
  }

  @Get('/validate')
  @UseFilters(TestFilter)
  getOtherValidate(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }

  @Post('/body')
  getOtherBody(@Body() body: any) {
    return body;
  }

  @Get('/ip')
  getOtherIp(@Ip() ip: string) {
    return ip;
  }
}
