const quotes = [
    {
    quote: "Forget injuries, never forget kindnesses."
    },
    {
    quote: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence."
    },
    {
    quote: "Try not to become a man of success but rather try to become a man of value.    "
    },
    {
    quote: "He that is busy is tempted by but one devil; he that is idle, by a legion."
    },
    {
    quote: "A man is but the product of his thoughts. What he thinks, he becomes."
    },
    {
    quote: "Whatever you do, do cautiously, and look to the end."
    },
    {
    quote: "Happiness lies in the joy of achievement and the thrill of creative effort."
    },
    {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
    },
    {
    quote: "Hope doesn't come from calculating whether the good news is winning out over the bad. It's simply a choice to take action."
    },
    {
    quote: "He who has never hoped can never despair."
    },
] // quotes 배열을 생성 
const quote = document.querySelector("#quote span"); //#quote에 span태그 변수로 선언
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //Math.floor 소숫점자리를 버림
// console.log(Math.random() * quotes.length); quotes.length 경우의 수

quote.innerText = todaysQuote.quotes; // quotes array에서 랜덤으로 quote 객체를 #quote에 span태그로 추가 