import { SupabaseService } from './supabase.service';
export declare class SupabaseController {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    signUp(email: string, password: string, name: string): Promise<{
        user: import("@supabase/auth-js").User | null;
        session: import("@supabase/auth-js").Session | null;
    } | {
        user: null;
        session: null;
    }>;
    signIn(email: string, password: string): Promise<import("@supabase/auth-js").Session>;
    signOut(): Promise<boolean>;
}
