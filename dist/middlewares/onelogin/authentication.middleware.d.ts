import { NextFunction, Request, Response } from 'express';
export declare const authenticationMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
