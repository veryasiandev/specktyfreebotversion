const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ADD TOKEN HERE'; // Token goes here.

const command = require('./commands') 
 // login the bot with your token.



 client.on('ready', async () => {
  console.log('The client is ready!');
  client.user.setActivity('>help');



});

//hello speckty

command(client, 'help', (message) => {

const logo =
      'https://yt3.ggpht.com/a-/AOh14GgD43Ka7oxkCrxPAXiIuY8-rG3Kb4h9dQuhulOH=s100-c-k-c0xffffffff-no-rj-mo'
	
    const embed = new Discord.MessageEmbed()
		.setTitle("Help is on the way!")
.setDescription("Hey user, Check out the rules of our server. If you want to boost our server then that would be greatly appreciated. You can use >say command to say something in embed form and also >fact command to get a random fact about something ")
.setFooter("Want a bot like this? Join this server: https://discord.gg/4NdcqjB")
.setColor("#00e1ff")





		    message.channel.send(embed)

  
});



//fact command 

command(client, 'fact', (message) => {


let replies = [


"The average person will spend six months of their life waiting for red lights to turn green. I bet dads are angry rn",
"A bolt of lightning contains enough energy to toast 100,000 slices of bread. It can also toast 50 humans ",
"The inventor of the frisbee was turned into a frisbee after he died. the inventor of graves be like bruh ",
"Dolphins have actual sound names which other dolphins use to call them. klafklasjdfalskjdf wanna comeover to the seabed? ",
"Rich Russians hire fake ambulances to get to places faster. they also get one last free ride before they die ",
"A pig was once executed for eating a child in France... ",
"Hippopotomonstrosesquippedaliophobia is the fear of long words. ",
"7% of American adults believe that chocolate milk comes from brown cows. I wonder where strawberry milk comes from ",
"In 2017 more people were killed from injuries caused by taking a selfie than by shark attacks. ",
"Recently, a doctor used a controller to do a surgery on a heart patient 200 miles away. you can die because of lag now ",
"Squirrels are behind most power outages in the U.S. stupid me thought it was because their is no eletricity",
"Blood donors in Sweden receive a text when their blood is used. 'you saved jimmy's life, he is now a serial killer :)''  ",
"You're more likely to get a computer virus from visiting religious sites than p*** sites. Jesus has blessed you with torjian X45",
"The inventor of the Pringles can is now buried in one. mmmm these pringles taste a bit burned",
"Sunglasses were originally designed for Chinese judges to hide their facial expressions in court. *giggles* Jimmy is Sentanced to 75 years in jail for Manslaughter",
"A New Orleans hotel offered a $15,000 stay to a whoever stole the 'most outrageous' item from them. what if someone stole the $15,000?? ",
"The Apollo 11 crew used hundreds of autographs as life insurance. why can't i use my holiday photo as life insurance tho? ",
"The Queen owns all the swans in England. You are being sentanced to Death for touching the swans",
"Crying makes you feel happier. I've been happy my entire life :) ",
"International astronauts must be able to speak Russian.cyka blyat ",
"Bubble wrap was originally intended to be wallpaper. *aggresively pops wallpaper*",
"˙906Ɩ uᴉ ɐᴉlɐɹʇsn∀ uᴉ ǝpɐɯ sɐʍ ɯlᴉɟ ǝɹnʇɐǝɟ pǝʇuǝɯnɔop ɹǝʌǝ-ʇsɹᴉɟ ǝɥ┴",
"Apples, peaches, and raspberries are all members of the rose family. me an idiot who taught roses were from rose families ",
"An animal’s yawn based on how large their brain is. The bigger the brain, the longer they will yawn. i bet i yawn longer than u  ",
"Surgeons who play video games at least 3 hours a week perform 27% faster and make 37% fewer errors. what happens when they rage quit tho? ",
"In Switzerland, it is illegal to flush the toilet after 10pm. Sir you are being hanged because you flushed ur toilet at 10:01 pm. Any last wishes?",
"Females are better at distinguishing colors, while males excel at tracking fast-moving objects and discerning detail from a distance. ",
"The fear of vegetables is called Lachanophobia. tell them to watch veggie tales ",
"Canadian law requires citizens to answer a math question when entering sweepstakes. If Jimmy is 300kg walking at 40km/h runs for 3 hours, then how many years will it take for him to get a girlfriend? ",
"Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.",
"The only letter that doesn’t appear on the periodic table is J.",
"One habit of intelligent humans is being easily annoyed by people around them, but saying nothing in order to avoid a meaningless argument.",
"In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.",
"There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves.",
"The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves.",
"At birth, a baby panda is smaller than a mouse.",
"Iceland does not have a railway system.",
"The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1.",
"Forrest Fenn, an art dealer and author, hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It still has not been found.",
"The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017.",
"The spiked dog collar was invented by the Ancient Greeks to protect their dogs from wolf attacks.",
"Jack Daniel (the founder of the whiskey) died from kicking a safe. When he kicked it, he broke his toe which got infected. He eventually died from blood poisoning.",
"Elton John tried to commit suicide once by sticking his head in an oven with the gas on low and windows open. He was found and stopped by his best friend Bernie Taupin.",
"The first service animals were established in Germany during World War I. References to service animals date as far back as the mid-16th Century.",
"An 11-year-old girl proposed the name for Pluto after the Roman god of the Underworld.",
"The voice actor of SpongeBob and the voice actor of Karen, Plankton’s computer wife, have been married since 1995.",
"An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand.",
"75% of the world’s diet is produced from just 12 plant and five different animal species.",
"The youngest Pope in history was Pope Benedict IX who was 11 years old at the time of election. He is also the only person to have been the Pope more than once.",
"People who post their fitness routine to Facebook are more likely to have psychological problems.",
"Nowadays, millionaires with just $1 million isn’t considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.",
"In 1325, two Italian city states fought over a bucket which resulted in 2,000 deaths. It started when two soldiers stole a bucket from a well from the city center.",
"Cherophobia is the word for the irrational fear of being happy. are ya happy son?"






];
let random = Math.floor(Math.random() * 50);

message.channel.send(replies[random])

});

//say command 




command(client, 'say', (message) => {

var arg = message.content.split(" ").slice(1).join(" ");

if (!arg) {
	return;

}; 


let sayEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(arg)
.setColor("#00fff2")

message.channel.send(sayEmbed);


});
  







client.login(token);
 
client.on('message', message => { //  Aka, the commands that will trigger the bot.
 	
 	//greatings=============================================================
    
    if(message.content.toLowerCase() === 'hello')
    		message.channel.send("hi bro im a bot ");

    else if(message.content.toLowerCase() === 'hii')
        message.channel.send("hi bro ");

    else if(message.content.toLowerCase() === 'hi')
        message.channel.send("hi bro ");

    else if(message.content.toLowerCase() === 'hey')
        message.channel.send("hey hey");

    else if(message.content.toLowerCase() === 'ello')
        message.channel.send("ello dude ");

    else if(message.content.toLowerCase() === 'elo')
        message.channel.send("elo bro");

    else if(message.content.toLowerCase() === 'hello <@!741731991980081253>')
        message.channel.send("ello there") ;

    else if(message.content.toLowerCase() === 'sup')
        message.channel.send("im doing fine wbu?") ;

    else if(message.content.toLowerCase() === 'whats up')
        message.channel.send("im good tan q") ;

    else if(message.content.toLowerCase() === 'hi bro')
        message.channel.send("hello bro, u gut?") ;

    else if(message.content.toLowerCase() === 'hello sl;dkfsa;lkdfj')
		message.channel.send("Hey, My name is Speckty. I am a chat bot that responds to messages. If you want to add me then DM ") ;




    //swear words =====================================================================
    else if(message.content.toLowerCase() === 'fuck you')
        message.channel.send("You are a bit offensive aren't you?") ;

    else if(message.content.toLowerCase() === 'fuck you <@!741731991980081253>')
        message.channel.send("no its you") ;

    else if(message.content.toLowerCase() === 'idiot')
        message.channel.send("no its you") ;

    else if(message.content.toLowerCase() === 'pussy')
        message.channel.send("Are you referring to the cat or the female organ ") ;

    else if(message.content.toLowerCase() === 'stupid')
        message.channel.send(" everyone knows whos stupid in this server") ;

    else if(message.content.toLowerCase() === 'no u')
        message.channel.send("no its you ") ;

    else if(message.content.toLowerCase() === 'shit')
        message.channel.send(":poop:") ;

    else if(message.content.toLowerCase() === 'what the fuck')
        message.channel.send("calm down dude") ;
    
    else if(message.content.toLowerCase() === 'fuck u')
        message.channel.send("no its you") ;

    else if(message.content.toLowerCase() === 'shut up')
        message.channel.send(" I ain't gonna tolerate this sort of behaviour. Dad Bot is angry") ;

    else if(message.content.toLowerCase() === 'stfu')
        message.channel.send("Calm down dude") ;

    else if(message.content.toLowerCase() === 'wtf')
        message.channel.send("stop swearing") ;

    // etc.... you get the idea. 
 
 
});


