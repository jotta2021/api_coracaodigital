"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "coracaovirtualsite@gmail.com",
        pass: "wawq vrdn rorb btir",
    },
});
class SendEmail {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recebe o email do usuario
            //e link do seu site
            const { email, link } = req.body;
            try {
                //gera o qrCode
                const info = yield transporter.sendMail({
                    from: '"Coração Digital" <coracaovirtualsite@gmail.com>', // sender address
                    to: email, // list of receivers
                    subject: "🎉 Seu site personalizado está pronto! - Coração Digital", // Subject line
                    text: "Seu site personalizado foi criado com sucesso na Coração Digital! Acesse o QR Code para compartilhar este gesto especial.", // plain text body
                    html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu site personalizado está pronto!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <!-- Container Principal -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 40px 30px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <img src="https://coracaodigital.online/amor.png" alt="Coração Digital" width="60" height="60" style="display: inline-block; margin-bottom: 20px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.2); padding: 8px;">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Seu site está pronto! 💝</h1>
                                        <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">Coração Digital</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Conteúdo Principal -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 24px; font-weight: 600;">Olá! 👋</h2>
                                        
                                        <p style="margin: 0 0 20px 0; color: #555; font-size: 16px; line-height: 1.7;">
                                            Seu site personalizado foi criado com <strong>sucesso</strong> na <span style="color: #ff6b6b; font-weight: 600;">Coração Digital</span>! 
                                            Agora você pode compartilhar este gesto especial com quem você ama.
                                        </p>

                                        <p style="margin: 0 0 30px 0; color: #555; font-size: 16px; line-height: 1.7;">
                                            Para acessar o QR Code personalizado, clique no botão abaixo:
                                        </p>

                                        <!-- Botão CTA -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
                                            <tr>
                                                <td align="center">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); border-radius: 8px; text-align: center;">
                                                                <a href="${`https://coracaodigital.online/qrcode/${link}`}" 
                                                                   style="display: inline-block; padding: 16px 32px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px; border-radius: 8px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);">
                                                                    📱 Acessar QR Code
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Seção Como Usar -->
                                        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin: 30px 0;">
                                            <h3 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 20px; font-weight: 600;">
                                                📋 Como usar o QR Code?
                                            </h3>
                                            <ol style="margin: 0; padding-left: 20px; color: #555; font-size: 15px;">
                                                <li style="margin-bottom: 8px;">Salve este e-mail para acesso rápido ao QR Code</li>
                                                <li style="margin-bottom: 8px;">Compartilhe ou imprima o QR Code</li>
                                                <li style="margin-bottom: 0;">Eles poderão escanear o código com qualquer celular e acessar o site personalizado imediatamente</li>
                                            </ol>
                                        </div>

                                        <!-- Mensagem de Agradecimento -->
                                        <div style="text-align: center; background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%); border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #ff6b6b;">
                                            <p style="margin: 0; color: #ff6b6b; font-weight: 600; font-size: 18px;">
                                                🎉 Obrigado por usar a <strong>Coração Digital</strong> para criar momentos inesquecíveis!
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #2c3e50; padding: 30px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 14px;">
                                            Precisa de ajuda ou quer fazer ajustes no site?
                                        </p>
                                        <p style="margin: 0 0 20px 0;">
                                            <a href="mailto:support@coracaodigital.com" 
                                               style="color: #ff6b6b; text-decoration: none; font-weight: 600; font-size: 14px;">
                                                📧 Entre em contato conosco
                                            </a>
                                        </p>
                                        <hr style="border: none; border-top: 1px solid #34495e; margin: 20px 0;">
                                        <p style="margin: 0; color: #bdc3c7; font-size: 12px;">
                                            Com carinho,<br>
                                            <strong style="color: #ffffff;">Equipe Coração Digital</strong> 💖
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
                });
                res.status(200).json("Email enviado com sucesso");
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = SendEmail;
