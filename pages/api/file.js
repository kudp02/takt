import nc from "next-connect";
import multer from "multer";
import path from "path";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + "-" + utc + path.extname(file.originalname));
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("file");
handler.use(uploadFile);

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).post(async (req, res) => {

  // const test = Object.entries(req.body).map(
  //   ([key, value]) => `${key}: ${value}`
  // );

  console.log(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.beget.com",
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });

  let mailData = {};

  // if (req.file) {
  //   mailData = {
  //     from: process.env.MAIL_FROM,
  //     to: process.env.MAIL_TO,
  //     subject: `Takt brief`,
  //     html: `<div>${test.join("<br>")}</div>`,
  //     attachments: [
  //       {
  //         filename: req.file.filename,
  //         path: process.cwd() + "/uploads/" + req.file.filename,
  //       },
  //     ],
  //   };
  // } else {
    mailData = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Takt brief`,
      // html: `<div>${test.join("<br>")}</div>`,
      html:"works"
    };
  // }

  transporter.sendMail(mailData);

  res.status(200).send("Uploaded");
});

export default handler;
