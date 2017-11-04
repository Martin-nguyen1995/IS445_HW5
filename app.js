const options = [
    '1: Show messages\n',
    '2: Add a message\n',
    '3: Delete a message\n',
    '0: Quit\n',
]
const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]


const message = prompt("Choose an option:\n" + options.join(''), 'Enter a message');



// alert('Your input is: ' + message)
const output = document.getElementById("output")
if (message === "1"){
    output.innerHTML = "The current messages are:\n"
    for(i=0;i<messages.length;i++){
        let number = i;
        number++;
        output.innerHTML +=  "<br/>" + number + ": " + messages[i];
    }
   
}
else if (message === '2'){
    inputMessage = prompt('Enter a new message:');

    messages.push(inputMessage);
    for(i=0;i<messages.length;i++){
        let number = i;
        number++;
        output.innerHTML +=  "<br/>" + number + ": " + messages[i];
    }
    
}
else if (message === '3'){
    let numbers = prompt("Enter the message index (between 1 and 5):");
    parseInt(numbers);
    numbers--;
    messages.splice(numbers,1);
    output.innerHTML = "The current messages are:\n"
    for(i=0;i<messages.length;i++)
    {
        let number = i;
        number++;
        output.innerHTML +=  ("<br/>" + number + ": " + messages[i]);
    }
}
else if(message === '0'){
    output.innerHTML ='Good Bye';
}
else{
    output.innerHTML='Please refresh and select a correct command.';
}