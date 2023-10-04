// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["what is chatbot"],
  ["what is the future of chatbots"],
  ["where are chatbots commonly used"],
  ["what are the types of chatbots"],
  ["can chatbots understand natural language"],
  ["what are some benefits of using chatbots"],
  ["are there any limitations to chatbots"],
  ["how can businesses implement chatbots"],
  ["what are some popular chatbot platforms"],
  ["are chatbots replacing human customer support agents"],
  ["how can I create my own chatbot"],
  ["what do i ask you"],
  ["how does artificial intelligence work"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],

  ["A chatbot is a computer program designed to simulate human conversation and provide automated responses to users' queries."],

  ["The future of chatbots involves continued advancements in AI and NLP, making them more sophisticated and capable of handling a wider range of tasks and interactions."],

  ["Chatbots work by using predefined rules, scripts, or artificial intelligence algorithms to interpret user inputs and generate relevant responses."],

  ["Chatbots are commonly used in customer service, e-commerce, healthcare, and various industries to provide information, automate tasks, and engage with users in real-time."],

  ["There are two main types of chatbots: rule-based chatbots that follow predefined scripts, and AI-powered chatbots that use natural language processing and machine learning."],

  ["Yes, advanced chatbots equipped with natural language processing (NLP) can understand and respond to natural language inputs, making interactions more conversational."],

  ["Benefits of chatbots include 24/7 availability, faster response times, cost savings in customer support, and improved user experiences."],

  ["Chatbots may struggle with complex or nuanced conversations, and their effectiveness depends on the quality of their training data and algorithms."],

  ["Businesses can implement chatbots by developing custom solutions or using chatbot platforms and integrating them into their websites or messaging apps."],

  ["Popular chatbot platforms include Dialogflow, IBM Watson Assistant, Microsoft Bot Framework, and many others, each offering various features and capabilities."],

  ["Chatbots are often used to handle routine queries and tasks, but human agents are still essential for complex issues and providing a personalized touch in customer support."],

  ["You can create your own chatbot by using development frameworks, libraries, or no-code/low-code platforms that offer chatbot-building capabilities."],

  ["You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?...."],

  ["Artificial intelligence (AI) involves the use of computer systems to perform tasks that typically require human intelligence. It includes machine learning, neural networks, and algorithms that enable computers to learn from data and make decisions."]

]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]