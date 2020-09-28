interface IMailTo {
  name: String;
  email: String;
}
interface IMailMessage {
  subject: String;
  body: String;
  attachment?: String[];
}

interface IMailMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendMail(request: IMailMessageDTO): void;
}

class EmailService {
  sendMail({ to, message }: IMailMessageDTO) {
    console.log(`Email enviado para ${to.name} : ${message.subject} !`);
  }
}

export default EmailService;
