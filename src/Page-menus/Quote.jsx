import React from 'react'
import { useEffect } from 'react'
import QuoteBar from '../quote-page/QuoteBar';

const Quote = () => {
    useEffect(() => {
        // Change the color of the nav menu when the component is mounted
        const navLinks = document.querySelectorAll('.ln-quote');
        console.log(navLinks);
        navLinks.forEach(link => {
          link.style.color = '#2563eb'; // Change this to your desired color
        });
        return ()=>{
          navLinks.forEach(link => {
            link.style.color = 'white'; 
          })
        }
      }, []);


      let data =[{
        disc:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
        author:"Adam Scott"
      },
      {
        disc:"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
        author:"Adelle Davis"
      },
      {
        disc:"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
        author:"Adelle Davis"
      },
      {
        disc:"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
        author:"Albert Einstein"
      },
      {
        disc:"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
        author:"Alice May Brock"
      },
      {
        disc:"Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, \"Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.\" Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
        author:"Anthelme Brillat-Savarin"
      },
      {
        disc:"Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
        author:"Calvin Trillin"
      },
      {
        disc:"Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good",
        author:"Calvin Trillin"
      },
      {
        disc:"Tell me what you eat, and I will tell you what you are.",
        author:" Cyra McFadden"
      },
      {
        disc:"Health food makes me sick.",
        author:"Eike von Repkow"
      },
      {
        disc:"The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
        author:"Epictetus"
      },
      {
        disc:"I no longer prepare food or drink with more than one ingredient.",
        author:"Epictetus"
      },
      {
        disc:"Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
        author:"Fran Lebowitz"
      },
      {
        disc:"My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.",
        author:"Fran Lebowitz"
      },
      {
        disc:"The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
        author:"G. K. Chesterton"
      },
      {
        disc:"He who comes first, eats first. [Familiar as: First come first serve",
        author:"Geoffrey Neighor"
      },
      {
        disc:"Bear in mind that you should conduct yourself in life as at a feast.",
        author:"George Bernard Shaw"
      },
      {
        disc:"Preach not to others what they should eat, but eat as becomes you, and be silent.",
        author:"George Dennison Prentice"
      },
      {
        disc:"I have never cared much for fish - it floats in the belly as much as in the pond.",
        author:"Henry Bromel"
      },
      {
        disc:"If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
        author:"J. R. R. Tolkien"
      }]




  return <>
        {
            data.map((element,index)=>{
              return <QuoteBar discription={element.disc} author={element.author} key={index} />
            })
        }
  </>
  
}

export default Quote