// Array of 100 quotes (you can replace them with your curated quotes)
const quotes = [
  "you look busy so i hope this helps on a bad day or during burnouts",
  
  "Just keep swimming! Just keep swimming swimming swimming",

  "Try to say “fuck you” to the world every once in a while, it will 100% help",

  "You'll have good days, bad days, overwhelming days, too tired days, “I'm awesome” days, “I can't go on” days, and every day you'll still show up.",

  "Don't make decisions based on fear, make them based on hope. Or something like that.. ",

  "A little rain helps the plants grow",

  "Whenever I'm going through a tough time I always look at myself in the mirror and say “you're still all right.” I say it however many times is needed to calm down from a mental breakdown or burnout or just general stress. It's gotten me through a lot. “You're still all right too,” is what I would say to you.",

  "There's very little in our world that a foot massage and a stuffed-crust, BBQ-chicken-and-pineapple papa johns pizza can fix a bad day.\n(I demand no hate for not knowing which menu was your favorite)",
  
  "Just like California, it can't rain all the time",

  "It does not matter how slowly you go as long as you do not stop",

  "I wanted a perfect ending. Now I've learned, the hard way, that some poems don't rhyme, and some stories don't have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what's going to happen next.",

  "Do what is right, not what is easy nor what is popular.",

  "Many bad days were preceded by a bad night's sleep, so get a good sleep tonight!",

  "The average life is full of near misses and absolute hits, of great love and small disasters. It's made up of banana milkshakes, loft insulation, and random shoes. It's dead ordinary and truly truly amazing. What you've got to realize is it's all here now. So breathe deep and swallow it whole because take it from me, life just whizzes by.",

  "I don't pray to god, I pray to you. You know why? Because you to me is a person who can get things done.",

  "If you're reading this... Congratulations, you're alive. If that's not something to smile about, then I don't know what is.",

  "If you remember me, then I don't care if everyone else forgets",

  "You were born to stand out, stop trying to fit in!",

  "It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart.",


  "Life is a book and there are a thousand pages we have not yet read",

  "You can't control what others say to/about you, but you can always choose which one you want to hear, so worry not!",

  "If you can't run, you walk. If you can't walk, you crawl. If you can't crawl -- call me and I'll carry you. (It's really corny I know… I let my intrusive thoughts win)",

  "You are unique. You have different talents and abilities. You don't have to always follow in the footsteps of others. And most important, you should always remind yourself that you don't have to do what everyone else is doing and have a responsibility to develop the talents you have been given",

  "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it happily and with a high spirit as if it's your first day on earth!",
  
  "Make it a great day!",
  
  "Don't compare your Behind The Scenes to another person's Instagram Highlight Reel",

  "Try to see the good things in every situation, no matter how small it is...",

  "Opportunity does not knock, it presents itself when you beat down the door, so just beat down whatever door is in front of you right now",

  "A laugh puts you on the right track. A laugh makes the world a beautiful place. When you lose your laugh, you lose your way in the chaos of life.",

  "Sometimes the questions are complicated and the answers are simple, don't let your thoughts search for a complicated answer",

  "In the middle of winter, I found within me an invincible summer",

  "No amount of regretting can change the past, and no amount of worrying can change the future",

  "And once the storm is over, you won't remember how you made it through, or how you managed to survive. You won't even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won't be the same person who walked in. That's what this storm is all about.",

  "Take a sad song and make it better!",

  "Smile more. Smiling can make you and others happy.",

  "So we beat on, boats against the current, borne back ceaselessly into the past.",

  "Well yeah, I'm sad. But at the same time I'm really happy that something can make me feel this sad. It's like… it makes me feel alive, you know? It makes me feel human. The only way I can feel this sad right now is if I felt something really good before. So I have to take the bad with the good, and maybe what I'm feeling is like a beautiful sadness instead?",

  "So far, you've survived 100% of your bad days. You'll be ok this time!",

  "I was laughing yesterday, I am laughing today, and I will laugh tomorrow. Simply because life is too short to not getting laughed at least all the time.",

  "This might be turning into an alcohol-will-cure-everything kind of day, and that's okay.",

  "A bad day doesn't cancel out a good life",

  "Everything works out in the end. If it doesn't work out, then it's definitely not the end",

  "You have one chance in a thousand, but one is all you ever need",

  "Success is not final, failure is not fatal: it is the courage to continue that counts.",

  "Nobody exists on purpose. Nobody belongs anywhere. Everybody's going to die. Come watch TV. (this don't look quite right but it sounds funny for me idk why..)",

  "Yes, chances are, there were another lives that we might have had, but we are having this one and are making the best out of it",

  "I was having a terrible day at work and said to a co-worker, “It's just not my day.”\nWithout missing a beat he said, “Well, make it your day.”",

  "Be soft. Do not let the world make you hard. Do not let the pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place.",

  "The best thing about storms is that they always pass. So this too shall pass.",

  "In three words I can sum up everything I've learned about life: it goes on.",

  "When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! Say “I don't want your damn lemons, what the hell am I supposed to do with these?” Demand to see life's manager! Make life rue the day it thought it could give you lemons! Say “Do you know who I am? I'm the girl who's gonna burn your house down! With the lemons! I'm gonna get my engineers to invent a combustible lemon that burns your house down!”",

  "Never let anyone treat you like you're regular glue. You're glitter glue.",

  "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice-versa, the bad things don't necessarily spoil the good things and make them unimportant.",

  "Remember that sometimes not getting what you want is a wonderful stroke of luck.",

  "The best thing about storms is that they always pass. So this too shall pass.",

  "DONT PANIC",

  "Life's simple. You make choices and don't look back",

  "Perfectionism is the enemy of happiness. Embrace being perfectly imperfect. Learn from your mistakes and forgive yourself, you'll be happier. We make mistakes because we are imperfect. Learn from your mistakes, forgive yourself, and keep moving forward",

  "Time doesn't heal emotional pain, you need to learn how to let go",

  "Life can only be understood backwards; but it must be lived forwards.",

  "Patience is not the ability to wait. Patience is to be calm no matter what happens, constantly take action to turn it to positive growth opportunities, and have faith to believe that it will all work out in the end while you are waiting.",

  "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey",

  "When the going gets tough, put one foot in front of the other and just keep going. Don't give up!",

  "A ship is safe in harbor, but that's not what ships are for, right?",

  "A bad day doesn't mean a bad week or a bad month or a bad year, keep going!",

  "This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up.",

  "A good day begins with a smile.",

  "Be happy, or at least try to be, even if it's hard!",

  "It is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world.",

  "Whatever you are, be a good one.",

  "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",

  "More smiling, less worrying.\nMore compassion, less judgment.\nMore blessed, less stressed.\nMore love, less hate.",

  "Attitude is a choice.\nHappiness is a choice.\nOptimism is a choice.\nKindness is a choice.\nGiving is a choice.\nRespect is a choice.\nWhatever choice you make,\nmakes you. Choose wisely.",

  "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be. So know that it's okay for us to not having everything figured out right now!",

  "Enjoy every step you take. If you're curious, there is always something new to be discovered in the backdrop of your daily life.",

  "You can cry when things get tough, no one should say the otherwise",

  "Stop comparing yourself to other people, just choose to be happy and live your own life.",

  "Be Brave and Take Risks: You need to have faith in yourself. Be brave and take risks. You don't have to have it all figured out to move forward.",

  "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.",

  "If you don't know where you're going, any road'll take you there",

  "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",

  "Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now, and you need to decide who you are for yourself.",

  "I love to see a girl go out and grab the world by the lapels, and even more if that girl is you!",

  "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",

  "Life becomes easier and more beautiful when we can see the good in other people. ",

  "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",

  "Maybe it's not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.",

  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring",

  "Pursue what catches your heart, not what catches your eyes.",

  "When people don't express themselves, they die one piece at a time, you know..",

  "Follow your heart, listen to your inner voice, and stop caring about what others think.",

  "You only live once, but if you do it right, once is enough.",

  "Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.",

  "Some people believe holding on and hanging in there are signs of great strength. However, there are times when it takes much more strength to know when to let go and then do it.",

  "Good friends, good books, and a sleepy conscience: this is the ideal life.",

  "Believe in your heart that you're meant to live a life full of passion, purpose, magic and miracles.",

  "We may not have gone where we intended to go, but I think we will end up where we need to be.",

  "Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.",

  "To love. To be loved. To never forget your own insignificance. To never get used to the unspeakable violence and the vulgar disparity of life around you. To seek joy in the saddest places. To pursue beauty to its lair. To never simplify what is complicated or complicate what is simple. To respect strength, never power. Above all, to watch. To try and understand. To never look away. And never, never to forget — is to live.",

  "What's done is done. What's gone is gone. One of life's lessons is always moving on. It's okay to look back to see how far you've come but keep moving forward!",

  "It's okay to not be okay",

  //this is the 100 mark

  "I meant what I said and I said what I meant. An elephant's faithful one-hundred percent. You'll be okay!",

  "You know, the brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who don't want it badly enough. They're there to stop the other people.",
  
  "Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind.",
  
  "please believe that things are good with me, and even when they're not, they will be soon enough. And i will always believe the same about you",
  
  "Know that life is never about looking over someone's shoulders",
  
  "Its okay if we don't want to be a genius, we have enough problems just trying to be a living person",

  "Life is too short to waste any amount of time on wondering what other people think about you",

  "Trees that are slow to grow bear the best fruit, so it's fine if you're stuck now",

  "Sometimes we get so caught up in our own problems that we forget how amazing the world is",

  "You know what, life happens, and it is okay.",

  "Life has no remote.... get up and change it yourself!",

  "Every solution to every problem is simple. It's the distance between the two where the mystery lies",
  
  "when you're scared but you still do it anyway, that's brave",
  
  "Sometimes, we must be willing to let go of the life we planned so as to have the life that is waiting for us",
  
  "If you want to be happy, be! (Easier said than done I know, but try!)",
  
  "Whatever you can do or dream you can, begin it.\nBoldness has genius, power and magic in it. Just start!",

  "If I have figured something out from my 20 years on earth, it's that the future is unpredictable. As people said: It's like when your car slides on ice, you steer into the skid. (I have never done that before)",

  "When painting, anything we don't like, we'll turn it into a happy little tree or something; We don't make mistakes, just happy little accidents",

  "The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe",

  "All it takes is just a little change of perspective for us to begin to see a whole new world!",

  "It's the imperfections that make something beautiful. That's what makes it different and unique from everything else. So don't worry if you feel like you can't do something right.",

  "Just let go - and fall like a little waterfall!",
  
  "Don't lie to yourself, if you're sad, just be sad for a while and reset after!",
  
  "If you do something wrong, that is not a mistake.\nIf you do something wrong and do not correct it,\n now that is called a mistake..",
  
  "Sorrow prepares you for joy. It violently sweeps everything out of your house, so that new joy can find space to enter. It shakes the yellow leaves from the bough of your heart, so that fresh, green leaves can grow in their place. It pulls up the rotten roots, so that new roots hidden beneath have room to grow. Whatever sorrow shakes from your heart, far better things will take their place.",
  
  "Yell if you need it, and rant out loud if that's not enough!",

  "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like",

  "Sometimes doing something wrong is better than doing nothing at all",

  "I know you're tired but come, this is the way.",

  "In everybody's life there's a point of no return. And in a very few cases, a point where you can't go forward anymore. And when we reach that point, all we can do is quietly accept the fact. That's how we survive",

  "I like to think that little by little I'll be able to solve my problems and survive",

  "I think the most wasted of all days is one without laughter",
  
  "Life, I realize, was much like a song. In the beginning there is mystery, in the end there is confirmation, but it's in the middle where all the emotion resides to make the whole thing worthwhile",
  
  "Don't take life too seriously. Kick them in the balls when they need a good hit. they deserved it!",
  
  "That it will never come again is what makes life so sweet.",
  
  "Maybe we've got nothing to do today but smile?",

  "You will find that it is necessary to let things go; simply for the reason that they are heavy..",

  "Don't try to make life a mathematics problem with yourself in the center and everything coming out equal. When you're good, bad things can still happen. And if you're bad, you can still be lucky.",

  "A learning experience is one of those things that says, “You know that thing you just did? Don't do that”",

  "Maybe everyone can live beyond what they're capable of, and that includes you too",

  "Of course you can have it all, but maybe not all at once, and that's still alright",

  "I like flaws. I think they make things interesting",
  
  "The more you know who you are, and what you want, the less you let things upset you",
  
  "At the end of the day, let there be no excuses, no explanations, no regrets",
  
  "The biggest wall you have to climb is the one you build in your mind: Never let your mind talk you out of your dreams, trick you into giving up. Never let your mind become the greatest obstacle to success. To get your mind on the right track, the rest will follow.",
  
  "A heart has problems which mind cannot understand",

  "I said to my soul, be still and wait without hope, for hope would be hope for the wrong thing; wait without love, for love would be love of the wrong thing; there is yet faith, but the faith and the love are all in the waiting. Wait without thought, for you are not ready for thought: So the darkness shall be the light, and the stillness the dancing.",

  "Wanting to be someone else is a waste of who you are",

  "There is a candle in your heart, ready to be kindled.\nThere is a void in your soul, ready to be filled.\nYou feel it, don't you?",

  "Life sucks, and then we die... (I should stop joking right?)",

  "No matter how careful you are, there's going to be the sense you missed something, the collapsed feeling under your skin that you didn't experience it all. There's that fallen heart feeling that you rushed right through the moments where you should've been paying attention. So let's just get used to that feeling.",

  "There's nowhere you can be that isn't where you're meant to be...",

  "We're killing time while we wait for life to shower us with meaning and happiness",
  
  "You'll never find a rainbow if you're looking down",
  
  "We are flawed creatures, all of us. Some of us think that means we should fix our flaws. But get rid of my flaws and there would be no one left",
  
  "When you do the right thing, you get the feeling of peace and serenity associated with it. Do it again and again",
  
  "Happiness is like a butterfly which, when pursued, is always beyond our grasp, but, if you will sit down quietly, may alight upon you",

  "The best way out is always through",

  "I am awfully greedy; I want everything from life. I want to be a woman and to be a man, to have many friends and to have loneliness, to work much and write good books, to travel and enjoy myself, to be selfish and to be unselfish… You see, it is difficult to get all which I want. And then when I do not succeed I get mad with anger. It doesn't make sense, but it's human.",

  "I mean, I could and would die for you. But I couldn't, and wouldn't, live for you",

  "Just because you think you can't, doesn't mean you shouldn't",

  "Once you realize you deserve a bright future, letting go of your past is the best choice you will ever make",

  "You don't have to take huge steps to change your life, even the smallest will do!",
  
  "Life is made of so many moments that mean nothing. Then one day, a single moment comes along to define every second that comes after… it's funny now that I think of it.",
  
  "They that can have patience can have what they will",
  
  "The universe is so well balanced that the mere fact that you have a problem also serves as a sign that there is a solution",
  
  "Maybe the reason birds can fly and we can't is simply because they have perfect faith, for to have faith is to have wings..",

  "The greatest thing in the world is to know how to belong to oneself",

  "In the name of any existing Gods, stop a moment, cease your work, look around you!",

  "There is some kind of a sweet innocence in being human- in not having to be just happy or just sad- in the nature of being able to be both broken and whole, at the same time",

  "Believe you can and you're halfway there",

  "We are products of our past, but we don't have to be prisoners of it",

  "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present",

  "We try to fix the outside so much, but our control of the outer world is limited, temporary, and often, illusory",

  "There are always answers. We just have to be smart enough, persistent enough, and want the answers enough",

  "If your life has no problems, you're not really living it",
  
  "Every problem comes with a baggage of solutions",
  
  "Every man is a damn fool for at least five minutes every day; wisdom consists in not exceeding the limit",
  
  "If your feet are firmly planted on the ground you'll never be able to dance",
  
  "Despite our best efforts, we are going to be hurt when it's time for us to be hurt",

  "sometimes you don't need a goal in life, you don't need to know the big picture. you just need to know what you're going to do next!",

  "Sometimes it takes a good fall to really know where you stand",

  "There are times to stay put, and what you want will come to you, and there are times to go out into the world and find such a thing for yourself",

  "But how could you live and have no story to tell?",

  "I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day, and I believe in miracles actually..",

  "Maybe I'll try anything once, twice if I like it, three times to make sure!",
  
  "Our life is what our thoughts make it",
  
  "Be melting snow, wash yourself of yourself",
  
  "Do all the good you can,\nBy all the means you can,\nIn all the ways you can,\nIn all the places you can,\nAt all the times you can,\nTo all the people you can,\nAs long as ever you can.",
  
  "If you do follow your bliss you put yourself on a kind of track that has been there all the while, waiting for you, and the life that you ought to be living is the one you are living. Follow your bliss and don't be afraid, and doors will open where you didn't know they were going to be",

  "What would come, would come...and you would have to meet it, when it did",
  
  "Music melts all the separate parts of our bodies together",
  
  "Just be yourself cause I believe there is no one better",
  
  "Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious...and curiosity keeps leading us down new paths",
  
  "The problems are solved, not by giving new information, but by arranging what we have known since long.",

  "We can choose to throw stones, to stumble on them, to climb over them, or to build with them",

  "Stories you read when you're the right age never quite leave you. You may forget who wrote them or what the story was called. Sometimes you'll forget precisely what happened, but if a story touches you it will stay with you, haunting the places in your mind that you rarely ever visit",

  "Look at the stars. It won't fix the economy. It won't stop wars. It won't give you flat abs, or even help you figure out your relationship. But it's important. It helps you to remember that you and your problems are both infinitesimally small and conversely, that you are a piece of an amazing and vast universe",

  "I've never met a problem a proper chocolate-and-peanut-butter toast couldn't fix",

  "I know you're scared sometimes, but you'll make it",

  //This is the 200 mark

];

// Function to handle key press events
function handleKeyPress(event) {
  // Check if the pressed key is "Enter" (key code 13)
  if (event.keyCode === 13) {
      // Prevent the default action of the key press (e.g., form submission)
      event.preventDefault();
      // Call the displayQuote function to process the input
      displayQuote();
  }
}

// Add event listener to the input element to listen for key press events
document.getElementById('inputNumber').addEventListener('keypress', handleKeyPress);

// Function to display a quote based on the input number
function displayQuote() {
  const inputNumber = parseInt(document.getElementById('inputNumber').value);
  if (inputNumber >= 0 && inputNumber <= 200) {
      const quoteIndex = inputNumber; // Adjust index to match array indexing
      const quoteDisplay = document.getElementById('quoteDisplay');
      const quoteText = quotes[quoteIndex];

      // Clear input after displaying quote
      document.getElementById('inputNumber').value = '';

      // Add a class to trigger the animation
      quoteDisplay.classList.remove('animated'); // Remove class if already added
      void quoteDisplay.offsetWidth; // Trigger reflow to restart animation
      quoteDisplay.classList.add('animated');

      // Delay the display of the quote
      setTimeout(function() {
          quoteDisplay.innerText = quoteText;
      }); // Adjust delay time as needed (in milliseconds)
  } else {
      alert("Please enter a number between 1-200.");
  }
}

// Function to update the clock
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // Pad single digit hours with leading zero
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Pad single digit minutes with leading zero
    const timeString = hours + ':' + minutes; // Format hours and minutes as HH:MM
    clockElement.textContent = timeString;
}

// Call the function initially to set the clock when the page loads
updateClock();

// Update the clock every second
setInterval(updateClock, 1000); // Update every second (1000 milliseconds)


