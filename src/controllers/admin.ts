import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

import { User } from '@/models';

@Controller('admin')
export class AdminController {
  @Get('detail')
  private async detail(req: Request, res: Response): Promise<void> {
    const hello = await Promise.resolve('world');

    const user = await User.findByPk(1);

    res.send({ hello, user });
  }
}
