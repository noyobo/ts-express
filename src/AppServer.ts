import cookieParser from 'cookie-parser';
import express, { Application, NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';

import { Server } from '@overnightjs/core';

import { AdminController } from './controllers/admin';

export class AppServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true

    const app = this.app;

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    this.setupControllers();

    // catch 404 and forward to error handler
    app.use((req: Request, res: Response, next: NextFunction): void => {
      next(createError(404));
    });

    // error handler
    app.use((err: any, req: Request, res: Response): void => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }

  private setupControllers(): void {
    const adminController = new AdminController();

    super.addControllers([adminController] /*, optional router here*/);
  }

  public get app(): Application {
    // @ts-ignore
    return this._app;
  }
}
