"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const supabase_js_1 = require("@supabase/supabase-js");
let SupabaseService = class SupabaseService {
    constructor(request, configService) {
        this.request = request;
        this.configService = configService;
    }
    async getClient() {
        if (this.clientInstance) {
            return this.clientInstance;
        }
        const supabaseUrl = this.configService.get('SUPABASE_API_URL');
        const supabaseKey = this.configService.get('SUPABASE_ANON_KEY');
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Supabase URL and API key must be provided');
        }
        this.clientInstance = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false,
            },
        });
        return this.clientInstance;
    }
    async signUp(email, password, name) {
        const client = await this.getClient();
        const { data: existingUser } = await client
            .from('users')
            .select()
            .eq('email', email);
        if (existingUser && existingUser.length > 0) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const { data, error } = await client.auth.signUp({
            email,
            password,
        });
        if (error) {
            throw error;
        }
        try {
            await client.from('users').insert({
                email,
                name,
                password,
            });
        }
        catch (error) {
            throw error;
        }
        return data;
    }
    async signIn(email, password) {
        const client = await this.getClient();
        const { data, error } = await client.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
        return data.session;
    }
    async signOut() {
        const client = await this.getClient();
        const { error } = await client.auth.signOut();
        if (error) {
            throw error;
        }
        return true;
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map