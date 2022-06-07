import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Good to see you again! Lovely day isn't it?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Why, hello there %s", name);
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        return String.format("The date today is %s", new Date());
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        if(conversation.indexOf("Alexis") > -1){
            return "She's a little busy at the moment. May I help you instead?";
        }
        if(conversation.indexOf("Alfred") > -1){
            return "How can I help you today?";
        }
        return "I shall see you another time then.";
    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

