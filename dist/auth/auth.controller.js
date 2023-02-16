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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const auth_service_1 = require("./auth.service");
const auth_request_dto_1 = require("./dto/auth-request.dto");
const verify_request_dto_1 = require("./dto/verify-request.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    generateOTP(payload) {
        return Promise.resolve(this.authService.generateOtp(payload.email));
    }
    verifyOTP(payload) {
        return Promise.resolve(this.authService.verifyOtp(payload.email, payload.otp));
    }
};
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_request_dto_1.AuthRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "generateOTP", null);
__decorate([
    (0, decorators_1.Post)('/verify'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_request_dto_1.VerifyRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOTP", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map