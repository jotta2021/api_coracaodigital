"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mercadopago_1 = require("mercadopago");
const sendEmail_1 = __importDefault(require("./sendEmail/sendEmail"));
const route = (0, express_1.Router)();
//define as credenciais do mercado pago
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: "APP_USR-5826761173699359-011510-198162a205a1fc7c7a169e6390ee07c1-213665539",
    options: { timeout: 5000, idempotencyKey: "abc" },
});
const payment = new mercadopago_1.Payment(client);
route.post("/process_payment", (req, res) => {
    const idempotencyKey = `payment_${Date.now()}`;
    console.log(req.body);
    payment
        .create({
        body: {
            transaction_amount: req.body.transaction_amount,
            description: req.body.description,
            payment_method_id: req.body.paymentMethodId,
            payer: {
                email: req.body.email,
                identification: {
                    type: req.body.identificationType,
                    number: req.body.number,
                },
            },
        },
        requestOptions: { idempotencyKey: idempotencyKey },
    })
        .then((response) => {
        res.status(200).send(response);
    })
        .catch((error) => {
        res.status(500).send(error);
    });
});
// rota responsavel por receber notificacoes de pagamento webhook
route.post("/webhook", (req, res) => {
    const data = req.body;
    console.log("Notificacao recebida", data);
});
route.get("/payment", (req, res) => {
    const { id } = req.query;
    //verifica o status do pagamento
    payment
        .get({
        id: String(id),
    })
        .then((data) => {
        console.log(data);
        res.status(200).json(data.status);
    })
        .catch((error) => {
        res.status(500).json(error);
    });
});
route.post("/sendEmail", new sendEmail_1.default().handle);
route.get("/", (req, res) => {
    res.send("servidor online");
});
exports.default = route;
/**
 *
 *
 * credenciais mercado pago:
public_key: TEST-64e6e361-267b-4be2-8f69-3aa0e65a7c8a
TEST-5826761173699359-011510-aef7741f1bed38c070a2d67f76bdc73f-213665539
acess_token:
dados cartao :5031 4332 1540 6351
11/25
codigo: 123


//https://api.mercadopago.com
 */
