# ts-express

## Controller



```typescript
import { Request, Response } from 'express';

import { Controller, Get } from '@overnightjs/core';

@Controller('admin')
export class AdminController {
  @Get('detail')
  private async detail(req: Request, res: Response): Promise<void> {
    const hello = await Promise.resolve('world');
    res.send({ hello });
  }
}
```

> https://www.npmjs.com/package/@overnightjs/core
