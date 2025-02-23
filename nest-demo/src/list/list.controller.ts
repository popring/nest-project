import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  path: 'list',
})
export class ListController {
  @Version('2')
  @Get()
  getListV2() {
    return [4, 5, 6];
  }

  @Get()
  getList() {
    return [1, 2, 3];
  }
}
