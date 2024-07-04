function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    let messages = [];
    
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // Build out the 'thank you' message for each name
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
      // Add that message to the new array
      messages.push(message);
    }
    
    // Return the new array
    return messages;
  }
  
  // Example usage:
  let names = ["Alice", "Bob", "Charlie"];
  let event = "birthday";
  let thankYouCards = writeCards(names, event);
  console.log(thankYouCards);
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(10);
  