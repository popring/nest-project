import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
  getOtherInterceptor() {
    return 'other interceptor';
  }

  getOther(): string {
    return 'other';
  }

  getOtherForbidden(): string {
    return 'other forbidden';
  }
}
