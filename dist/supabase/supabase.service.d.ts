import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private readonly request;
    private readonly configService;
    private clientInstance;
    constructor(request: Request, configService: ConfigService);
    getClient(): Promise<SupabaseClient<any, "public", any>>;
    signUp(email: string, password: string, name: string): Promise<{
        user: import("@supabase/supabase-js").AuthUser | null;
        session: import("@supabase/supabase-js").AuthSession | null;
    } | {
        user: null;
        session: null;
    }>;
    signIn(email: string, password: string): Promise<import("@supabase/supabase-js").AuthSession>;
    signOut(): Promise<boolean>;
}
