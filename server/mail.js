const sgMail = require('@sendgrid/mail')
const API_KEY = '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'

sgMail.setApiKey(API_KEY)

const email = (data) =>{
    const message = {
        to: data.assignedBy,
        from: 'tushar.192034101@vcet.edu.in',
        subject: data.title,
        // text: data.description,
        html: `<h4>Thank you for creating ticket blah blah blah ${data.description} with ticket id ${data._id}</h4>`,
    };
    
    sgMail.send(message)
    .then(respose =>console.log('Email send'))
    .catch((error) => console.log(error.message));
    
}


module.exports= {email};
