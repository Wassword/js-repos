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

    emails:[{mailbox:'inbox',email:"bob@g.com", subject:"something", body:"need to talk to about somethings"},
        {mailbox:'sent',email:"cool@g.com", subject:"something", body:"need to talk to about somethings"},
        {mailbox: 'drafts',email: "wow@g.com", subject:"something",body: "need to talk to about somethings"}

    ], //array of objects
};
//1. Get a list of mailbox names
function getMailboxNames(data) {
    return data.mailboxes;
}
console.log("Mailbox names:", getMailboxNames(appData));

//2.Get a list of emails
function getEmails(data) {
    return data.contact.map(contact => contact.email);

}
console.log("Emails:",getEmails(appData));

//3.Get the text of the second email in the visible list

function getSecondEmailText(data) {
    if(data.emails.length >= 2){
        return data.emails[1];
    } else{
        return "there is less than 2 emails in this list";
    }
    
}
console.log(getSecondEmailText(appData));

//4.Mark an email as sent
function markEmailAsSent(data) {
   for( email of data.emails){
    if (email.mailbox ==="drafts"){
        email.mailbox= "sent";
        break;
    }
   }
}
console.log(markEmailAsSent(appData));

//5.Add a draft email to the drafts mailbox
function addDraftEmail(data) {
    for(draft of data.emails){
        if(draft.mailbox==="drafts")
            return addDraftEmail;

    } 
    
}
console.log(addDraftEmail(appData));


