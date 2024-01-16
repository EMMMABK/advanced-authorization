const nodemailer = require('nodemailer');


class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            
        })
    }

    async sendActivationMail(to, link){

    }
}

module.exports = new MailService();