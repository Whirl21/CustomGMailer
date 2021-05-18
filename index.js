let emailAd = prompt("The email which is going to be used to send the mail")
let emailAdPass = prompt("The password of "+ emailAd + "\nPs:This is not stored anywhere so no one can see this ")
let emailTo = prompt("Who to email to?\nMake sure it's a full address")
let subject = prompt("Email Subject")
let content = prompt("Email content")
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailAd,
    pass: emailAdPass
  }
});

var mailOptions = {
  from: emailAd,
  to: emailTo ,
  subject: subject,
  text: content
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    document.getElementById("lol").innerHTML("Sorry But there was a err\t open the console to view the error\n but try trying it again ")
  } else {
   document.getElementById("lol").innerHTML("Yess! Your email has been sent !")
  }
});