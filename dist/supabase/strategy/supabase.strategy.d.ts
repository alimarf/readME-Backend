import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
declare const SupabaseStrategy_base: new (...args: any[]) => Strategy;
export declare class SupabaseStrategy extends SupabaseStrategy_base {
    constructor(configService: ConfigService);
    validate(request: Request): Promise<Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>>;
}
export {};
