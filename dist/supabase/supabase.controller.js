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
exports.SupabaseController = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("./supabase.service");
const guard_1 = require("./guard");
let SupabaseController = class SupabaseController {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    signUp(email, password, name) {
        return this.supabaseService.signUp(email, password, name);
    }
    signIn(email, password) {
        return this.supabaseService.signIn(email, password);
    }
    signOut() {
        return this.supabaseService.signOut();
    }
};
exports.SupabaseController = SupabaseController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], SupabaseController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SupabaseController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('signout'),
    (0, common_1.UseGuards)(guard_1.SupabaseGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupabaseController.prototype, "signOut", null);
exports.SupabaseController = SupabaseController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], SupabaseController);
//# sourceMappingURL=supabase.controller.js.map