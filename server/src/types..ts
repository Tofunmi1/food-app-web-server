import { Request, Response } from "express";
import { Redis } from 'ioredis'
import { Stream } from "stream";

export type MyContext = {
  req: Request & { session?:Express.Session };
  res: Response;
  redis?: Redis;
};

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream:() => Stream;
}