const sgMail = require('@sendgrid/mail')
const API_KEY = process.env.API_KEY

sgMail.setApiKey(API_KEY)

const email = (data) =>{
    const message = {
        to: data.assignedBy,
        from: 'tejas.191954101@vcet.edu.in',
        subject: data.title,
        // text: data.description,
        html: `<h4>Thank you for creating ticket blah blah blah ${data.description} with ticket id ${data._id}</h4>`,
    };
    
    sgMail.send(message)
    .then(respose =>console.log('Email send'))
    .catch((error) => console.log(error.message));
    
}
const comment = (text,ticket) =>{
    const message = {
        to: 'tusharmittal1201@gmail.com',
        from: 'tejas.191954101@vcet.edu.in',
        subject: `Comment Thread of ${ticket._id}`,
        // text: data.description, 
        html: `Hello, ${text.name} Thread reply of ${ticket._id} is <h4>${text.text}</h4>`,
    };
    
    sgMail.send(message)
    .then(respose =>console.log('Email send'))
    .catch((error) => console.log(error.message));
    
}
const taskMail = (task) =>{
    const message = {
        to: task.assignedTo,
        from: 'tejas.191954101@vcet.edu.in',
        subject: `New Task Assigned ${task._id}`,
        html: `New task assigned to you ${task._id} is <h4>${task.title}</h4>`,
    };
    
    sgMail.send(message)
    .then(respose =>console.log('Email send'))
    .catch((error) => console.log(error.message));
}


module.exports= {email,comment,taskMail};
