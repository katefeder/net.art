console.log("javascript file is connected!");

/* declare variables (video and text), but these are only used in the simplified 
code commented out below */
var video = document.getElementById("video");
var text = document.getElementById("text");

function start() {
	// Make the play box invisible
	document.getElementById("playBox").style.display = "none";
	// Show the video
	document.getElementById("video").style.display = "block";
	// Play the video
	document.getElementById("video").play();

}
/*
	Because of Google Chrome autoplay policy, the user must
	interact with the page before a video can play
	This file has a div for the user to click
*/

function init() {
	// Add an event listener to the play box
	// event listener method attaches an event handler to the specified element
	document.getElementById("playBox").addEventListener("click", start, {passive: true});
}





/* 
Commented out lines below are a simplified way to format the code, using the variables declared above.
console.logs display that the video is moving forward on the timeline.
*/

	//text.innerHTML = "You decided to go to sleep, and had a strange dream...";
	//video.src = "video/typingDream.mp4";
	//console.log(video.currentTime);
	//video.currentTime = 5;//5 seconds
	//console.log(video.currentTime);

//start of fully correct answer path

function log_off(){
	console.log("log off");
	document.getElementById("subheading").innerHTML = "Correct!"
	document.getElementById("uppertext").innerHTML = "If you ever get a fake pop-up, including ones like scareware, " + 
													"close the page immediately and make sure to not click on any buttons." +
													 " Better yet, don’t visit sketchy websites at all!";
	document.getElementById("transitions").innerHTML = "Moving on...";
	document.getElementById("text").innerHTML = "You just got out of class and it’s time for lunch! You make your way to the courtyard outside and see your friends say" +
											    " something to the new girl in your grade, before walking away and laughing. You walk over to them and ask what’s going on,"+
											    " and they reply by showing you a selfie the new girl’s posted on her social media. They laugh again and ask if you think"+
											    " she looks ugly, and before you can even answer, they tell you that they left mean comments on the selfie to make her feel"+
											    " bad and that you should as well. You like the new girl and think she looks fine in her post, but you don’t want to argue"+
											    " with or upset your friends. What do you do?";
	document.getElementById("video").src = "video/cyberbully_scenario.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="cyberbully()">Leave a mean comment</button> <button class="claim" onclick="no_comment()">Do not comment</button></div>';
}
//done
function no_comment(){
	document.getElementById("subheading").innerHTML = "Great job!"
	document.getElementById("uppertext").innerHTML = "Cyberbullying is never okay, and can be just as harmful and malicious as any other form of bullying. "+
													"If you want to help, encourage your friends to delete their comments and apologize to the new girl immediately. "+
													"You could also leave an uplifting and friendly message on the new girl’s selfie (and maybe find better friends).";
	document.getElementById("transitions").innerHTML = "Later...";
	document.getElementById("text").innerHTML = "You come home from school and go upstairs to see your mom. You find her sitting in her office, reading an email on her computer. "+
												"She greets you and asks you to come read this email that she got, which appears to be from her boss Bill. In the email, Bill asks her "+
												"to purchase gift cards and send them to him immediately so he can distribute them to their clients. Your mom is confused, since her company "+
												"has never done this before and the email is different from the one her boss usually uses, but she trusts him and wants to help him out. "+
												"Earlier, Bill said he was too busy to reply to any messages, so she wants your input on what she should do. "+
												"What do you tell her to do?";
	document.getElementById("video").src = "video/Phishing.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="money()">Buy the gift cards</button> <button class="claim" onclick="ignore()">Do not buy the gift cards</button></div>';
}
//done
function ignore(){
	document.getElementById("subheading").innerHTML = "Nice one!"
	document.getElementById("uppertext").innerHTML = "<b>Phishing scams are very common, and easy to spot if you know where to look. Phishing emails typically have: urgency, excuses, "+
														"financial transactions, ambiguity, and a fake email address. Your mom should contact her boss immediately and definitely not buy "+
														"the gift cards. She should also send over and report this scam to the cybersecurity team at her workplace, so they can work to prevent "+
														"this from happening again!";
	document.getElementById("transitions").innerHTML = "And now...";
	document.getElementById("text").innerHTML = "You lay down on your bed about to take a nice nap when you remember the history paper that’s due by the end of the day. You haven’t started "+
												"writing it yet, so you reluctantly get out of bed and sit down at your desk to start. The topic of the paper is on political divisions in the "+
												"United States. As you’re writing the paper, you realize that you don’t know enough about this topic to answer the prompt, so you Google it. Tons "+
												"of results come up, but you only want to use a few sources. As you look through the results, you find pages and articles from thefederalist.com, "+
												"history.house.gov, pewresearch.org, and freepress.net, all of which contain information that you could use in your paper. However, you can’t use all of these "+
												"sources and want to only cite reputable ones that have accurate and unbiased information. Which of these sources will you cite in your paper?";
	document.getElementById("video").src = "video/historypaper.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="unbiased()">Use the .gov and .org sites</button> <button class="claim" onclick="biased()">Use the .com and .net sites</button></div>';
}

function unbiased(){
	document.getElementById("subheading").innerHTML = "Perfect!"
	document.getElementById("uppertext").innerHTML = "The domain suffixes .gov and .org represent government sites and non-profit organizations. Generally, these types of sites "+
													"are frequently reviewed and contain credible and unbiased information. Sources with these suffixes are among the most trusted types of "+
													"websites for research, so they should provide you with the information you need to finish your paper! Just make sure to turn it in by 11:59 p.m. tonight!";
	document.getElementById("transitions").innerHTML = "";
	document.getElementById("text").innerHTML = "Well, you sure had a busy day. It’s time to head to bed!";
	document.getElementById("video").src = "video/sleeping.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="bedtime" onclick="ending()">Go to sleep</button></div>';
}

function ending(){
	document.getElementById("subheading").innerHTML = "Congrats! You successfully made it through the day!"
	document.getElementById("uppertext").innerHTML = "You were able to get through it by making smart choices about using social media and the internet. "+
													"Hopefully this adventure has taught you some valuable lessons about malicious pop-ups, cyberbullying, phishing scams, and choosing credible sources, and "+
													"encouraged you to learn more about properly using and consuming digital media. In the current age of technology, understanding these topics is a "+
													"valuable skill that will last a lifetime.";
	document.getElementById("transitions").innerHTML = "As a reward for your hard work, here’s your very own Seal of Digital Literacy!";
	document.getElementById("text").innerHTML = "To help spread the skill of internet literacy, share this website with your friends and family!";
	document.getElementById("video").src = "video/literacy_medal.mp4";
	document.getElementById("select").innerHTML = "";
}
//chooses incorrect answer first question

function claim(){
	document.getElementById("subheading").innerHTML = "Wait a minute..."
	document.getElementById("uppertext").innerHTML = "";
	document.getElementById("transitions").innerHTML = "";
	document.getElementById("text").innerHTML = "Never click on suspicious pop-ups, which are often trying to get you to download antivirus software "+
												"or claim a prize that you “won” randomly. These are often fake pop-ups designed to get you to click on "+
												"a button, which can redirect you to a fake site or even cause you to download malware (software designed "+
												"to disrupt computer functioning). These are referred to as scareware. These types of pop-ups often have typos, "+
												"unprofessional images, and look very different from regular notifications. These types of pop-ups are dangerous "+
												"and can compromise the safety and functionality of your computer!";
	document.getElementById("video").src = "video/scareware.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="back" onclick="backscen1()">Try again!</button></div>';
}

function backscen1(){
	document.getElementById("subheading").innerHTML = "Test your digital literacy skills!"
	document.getElementById("uppertext").innerHTML = "Choose the safest and smartest option in each scenario to successfully get through the day!";
	document.getElementById("transitions").innerHTML = "Let's get started...";
	document.getElementById("text").innerHTML = "After waking up and getting ready, you realize that it’s earlier than usual and you still have 30 minutes until the bus "+
												"comes to take you to school. That’s just enough time to watch the new episode of your favorite show! You don’t have access "+
												"to any streaming services, so you have to watch it on a sketchy website. As you open the webpage, a warning pops on the screen "+
												"alerting you that a virus has been detected on your computer! Luckily, they claim to have the right antivirus software for you. "+
												"All you have to do is click the download button on the pop up! Your computer has been working fine and you haven’t gotten any alerts "+
												"like this before, so you’re hesitant to download the software. But, this is a new computer and you don’t want to have any viruses "+
												"on it, so the software may be a good idea. What do you do?";
	document.getElementById("video").src = "video/scareware_example.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="log_off()">Close the page</button> <button class="claim" onclick="claim()">Download the software</button></div>';
}

//chooses incorrect answer second question

function cyberbully(){
	document.getElementById("subheading").innerHTML = "Hold on..."
	document.getElementById("uppertext").innerHTML = "";
	document.getElementById("transitions").innerHTML = "";
	document.getElementById("text").innerHTML = "Let’s look at this from a different perspective. How would you feel if a bunch of people commented on your "+
												"appearance and left mean messages about you on a harmless photo of you? Pretty bad, probably. While you may not be "+
												"physically harassing or harming them, being malicious to someone on the internet is still bullying. People who behave "+
												"this way are called cyberbullies. They use the internet and social media to send mean messages to other people, often through "+
												"anonymous accounts so the victim won’t be able to identify who they are.";
	document.getElementById("video").src = "video/cyberbully_wrong.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="back" onclick="backscen2()">Try again!</button></div>';
}

function backscen2(){
	document.getElementById("subheading").innerHTML = "Correct!"
	document.getElementById("uppertext").innerHTML = "If you ever get a fake pop-up, including ones like scareware, " + 
													"close the page immediately and make sure to not click on any buttons." +
													 " Better yet, don’t visit sketchy websites at all!";
	document.getElementById("transitions").innerHTML = "Moving on...";
	document.getElementById("text").innerHTML = "You just got out of class and it’s time for lunch! You make your way to the courtyard outside and see your friends say" +
											    " something to the new girl in your grade, before walking away and laughing. You walk over to them and ask what’s going on,"+
											    " and they reply by showing you a selfie the new girl’s posted on her social media. They laugh again and ask if you think"+
											    " she looks ugly, and before you can even answer, they tell you that they left mean comments on the selfie to make her feel"+
											    " bad and that you should as well. You like the new girl and think she looks fine in her post, but you don’t want to argue"+
											    " with or upset your friends. What do you do?";
	document.getElementById("video").src = "video/cyberbully_scenario.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="cyberbully()">Leave a mean comment</button> <button class="claim" onclick="no_comment()">Do not comment</button></div>';
}

//chooses incorrect answer third question

function money(){
	document.getElementById("subheading").innerHTML = "Let's take a closer look..."
	document.getElementById("uppertext").innerHTML = "";
	document.getElementById("transitions").innerHTML = "";
	document.getElementById("text").innerHTML = "This is a phishing attempt. Phishing is the act of sending fraudulent emails to people claiming to be from a reputable, "+
												"trustworthy source in an attempt to get individuals to reveal personal information or send money (or other types of funds). "+
												"Let’s read over that email again. Phishing emails tend to establish a sense of urgency, give reasons why they can’t be contacted "+
												"in ways besides email, present a financial transaction in ambiguous circumstances, and use fake email addresses with only the correct "+
												"display name. Phishing scams often (but not always) contain links and attachments as well.";
	document.getElementById("video").src = "video/phishing_wrong.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="back" onclick="backscen3()">Try again!</button></div>';
}

function backscen3(){
	document.getElementById("subheading").innerHTML = "Great job!"
	document.getElementById("uppertext").innerHTML = "Cyberbullying is never okay, and can be just as harmful and malicious as any other form of bullying. "+
													"If you want to help, encourage your friends to delete their comments and apologize to the new girl immediately. "+
													"You could also leave an uplifting and friendly message on the new girl’s selfie (and maybe find better friends).";
	document.getElementById("transitions").innerHTML = "Later...";
	document.getElementById("text").innerHTML = "You come home from school and go upstairs to see your mom. You find her sitting in her office, reading an email on her computer. "+
												"She greets you and asks you to come read this email that she got, which appears to be from her boss Bill. In the email, Bill asks her "+
												"to purchase gift cards and send them to him immediately so he can distribute them to their clients. Your mom is confused, since her company "+
												"has never done this before and the email is different from the one her boss usually uses, but she trusts him and wants to help him out. "+
												"Earlier, Bill said he was too busy to reply to any messages, so she wants your input on what she should do. "+
												"What do you tell her to do?";
	document.getElementById("video").src = "video/Phishing.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="money()">Buy the gift cards</button> <button class="claim" onclick="ignore()">Do not buy the gift cards</button></div>';
}

//chooses incorrect answer last question

function biased(){
	document.getElementById("subheading").innerHTML = "Not so fast..."
	document.getElementById("uppertext").innerHTML = "";
	document.getElementById("transitions").innerHTML = "";
	document.getElementById("text").innerHTML = "Let’s analyze these websites. They each have a different domain suffix, which is the last part of a URL. While thefederalist.com uses "+
												".com, freepress.net uses the .net domain suffix. The domain suffix gives us a clue as to what the purpose and audience of a website is. "+
												"Usually, URLs ending in .com are commercial sites, which aim to sell you a product or promote a certain viewpoint. These sites often have "+
												"a monetary incentive, and do not always contain unbiased information. Additionally, .net stands for network. These kinds of sites can "+
												"be anything, and the information in them can often be inaccurate and biased. Websites with these suffixes are not recommended for academic "+
												"work or research, even if they're considered to contain mostly factual information. Conversely, .gov and .org represent government sites and "+
												"non-profit organizations. Generally, these types of sites are frequently reviewed and contain credible and unbiased information.";
	document.getElementById("video").src = "video/media_bias.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="back" onclick="backscen4()">Try again!</button></div>';
}

function backscen4(){
	document.getElementById("subheading").innerHTML = "Nice one!"
	document.getElementById("uppertext").innerHTML = "Phishing scams are very common, and easy to spot if you know where to look. Phishing emails typically have: urgency, excuses, "+
														"financial transactions, ambiguity, and a fake email address. Your mom should contact her boss immediately and definitely not buy "+
														"the gift cards. She should also send over and report this scam to the cybersecurity team at her workplace, so they can work to prevent "+
														"this from happening again!";
	document.getElementById("transitions").innerHTML = "And now...";
	document.getElementById("text").innerHTML = "You lay down on your bed about to take a nice nap when you remember the history paper that’s due by the end of the day. You haven’t started "+
												"writing it yet, so you reluctantly get out of bed and sit down at your desk to start. The topic of the paper is on political divisions in the "+
												"United States. As you’re writing the paper, you realize that you don’t know enough about this topic to answer the prompt, so you Google it. Tons "+
												"of results come up, but you only want to use a few sources. As you look through the results, you find pages and articles from thefederalist.com, "+
												"history.house.gov, pewresearch.org, and freepress.net, all of which contain information that you could use in your paper. However, you can’t use all of these "+
												"sources and want to only cite reputable ones that have accurate and unbiased information. Which of these sources will you cite in your paper?";
	document.getElementById("video").src = "video/historypaper.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="log_off" onclick="unbiased()">Use the .gov and .org sites</button> <button class="claim" onclick="biased()">Use the .com and .net sites</button></div>';
}

//	this is another more concise way that my friend showed me how to do
//	button("Ipad Scam", 
		//"video/typingDream.mp4", 
		//"log_off", "log_off()", "Log off of the page!", 
		//"claim", "claim()", "Claim the iPad and enter your personal information!"); 

//function button(text, video, rightAnswer, rightOnClick, rightButtonText, wrongAnswer, wrongOnClick, wrongButtonText){
	//document.getElementById("text").innerHTML = text;
	//document.getElementById("video").src = video;
	//document.getElementById("select").innerHTML = `<div id = \"select\"><button class=${rightAnswer} onclick = ${rightOnClick}>${rightButtonText}</button><button class = ${wrongAnswer} onclick = ${wrongOnClick}>${wrongButtonText}</button></div>`; 
//}

window.onload = init();


