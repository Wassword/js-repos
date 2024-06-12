let appData = {
    name: 'Gmail',
    userProfile: {
        name: 'Katheryn Smith',
        age: '28',
        email: 'katherynsmith@gmail.com'

            
    },// object with multiple properties

    mailboxes: [
             'inbox,',
              'junk',
              'sent',
              'starred',
              'Drafts',

    ],//array of strings

    contact: [
             {name: 'Leena', email:'abcrealworld@gmail.com',  lastMessage: "I'm cooking dinner tonight"}, 
             {name: 'Nick', email:'12345bearbutter@yahoo.com',lastMessage: "Our group project has been graded"}, 
             {name: 'Brandon', email:'abcrealworld@gmail.com',lastMessage: "I'm working on week 19"}, 

    ],//array of objects
};
//1. Get a list of mailbox names
function getMailboxNames(Data) {
    return Data.mailboxes;
    console.log("Mailbox names:",getMailboxNames);
}
//2.Get a list of emails
function getEmails(data) {
    return data.contact.map(contact => contact.email);
    console.log("Emails:",getEmails);
}
//3.Get the text of the second email in the visible list
function getsecondemailtext(data) {
    if(data.contact.length >= 2){
        return data.contact.lastMessage;
    } else{
        return "there is less than 2 emails in this list";
    }
}
//4.Mark an email as sent
function markEmailAsSent(data) {
    if (sentEmail) {
        data.mailboxes.push(sentEmail); //added to sent mailbox
        console.log('marked from sent email as sent');
    }else {
        console.log("no email marked sent");
           }
}
//5.Add a draft email to the drafts mailbox
function addDraftEmail(data,) {
    data.mailboxes.push('Drafts');
    console.log('added draft email from ${draftEmail.email} from Drafts')
}

