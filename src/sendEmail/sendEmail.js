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
                const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?data=${link}&size=150x150`;
                const info = yield transporter.sendMail({
                    from: '"Coração Digital" <coracaovirtualsite@gmail.com>', // sender address
                    to: email, // list of receivers
                    subject: "Site Coração Digital", // Subject line
                    text: "Hello world?", // plain text body
                    html: `
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
   <div style="max-width: 600px; margin: 0 auto;  padding: 0; background-color: #f9f9f9; ">
      
      <header style="background-color: black; border-top-left-radius: 6px; border-top-right-radius: 6px; padding: 6px; display: flex; align-items: center; gap: 4px; justify-content: center;">
    
        <h3 style="text-align: center; color:white;">Seu site personalizado está pronto! </h3>
        <img src="https://coracaodigital.online/amor.png" width="40px" height="40px"/> 
      </header>
     
      <div style="padding: 20px;">
        <p>Olá!</p>
      <p>Seu site personalizado foi criado com sucesso na <strong>Coração Digital</strong>! 🥰</p>
      <p>Agora você pode compartilhar este gesto especial com quem você ama. Para ter acesso ao QR Code , é só clicar no botão abaixo.</p>
      <div style="text-align: center; margin: 20px 0; background-color: white; border: 1px solid #999; border-radius:6px;">
       <a href=${`https://coracaodigital.online/qrcode/${link}`} style="background-color: red; color: white; border:1px solid #e6e6e6 ;  padding:6px;
       border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 10px;
       ">
        Acessar QR Code
       </a>
        
      </div>
      <h3>Como usar o QR Code?</h3>
      <ol>
        <li>Salve este e-mail para acesso rápido ao QR Code.</li>
        <li>Compartilhe ou imprima o QR Code </li>
        <li>Eles poderão escanear o código com qualquer celular e acessar o site personalizado imediatamente.</li>
      </ol>
      <p style="text-align: center; font-weight: bold; color: rgb(255, 0, 0);">🎉 Obrigado por usar a <strong>Coração Digital</strong> para criar momentos inesquecíveis!</p>
      <p style="text-align: center;">Caso precise de ajuda ou queira fazer ajustes no site, <a href="mailto:support@coracaodigital.com" style="color: #ff477e; text-decoration: none;">entre em contato conosco</a> respondendo a este e-mail.</p>
      <p style="text-align: center; font-size: 0.9rem; color: #999;">Com carinho,<br>Equipe <strong>Coração Digital</strong> 💖</p>
      </div>
      
    </div>
</body>
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
