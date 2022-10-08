const sgMail = require('@sendgrid/mail')
const API_KEY = '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'

sgMail.setApiKey(API_KEY)

const email = (data) =>{
    const message = {
        to: data.assignedBy,
        from: 'vcet.hackathon@vcet.edu.in',
        subject: data.title,
        // text: data.description,
        html: `<h4>Thank you for creating ticket blah blah blah ${data.description} with ticket id ${data._id}</h4>`,
    };
    
    sgMail.send(message)
    .then(respose =>console.log('Email send',respose))
    .catch((error) => console.log(error.message));
    
}


module.exports= {email};
