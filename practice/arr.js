// JavaScript code to create a Random Quote Generator using arrays

let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Just one small positive thought in the morning can change your whole day. — ...",
    "Opportunities don't happen, you create them. — ...",
    "Love your family, work super hard, live your passion.— ...",
    "It is never too late to be what you might have been. —",
    "Optimism is the faith that leads to achievement. ...",
    "Life is 10 % what happens to you and 90 % how you react to it. ...",
    "Believe in yourself! ...",
    "Ever tried. ...",
    "Quality is not an act, it is a habit. ...",
    "Good, better, best. ...",
    "Our greatest weakness lies in giving up. ...",
    "If you're going through hell, keep going",
    "Our greatest weakness lies in giving up. ...",
    "If you're going through hell, keep going",
    "You will face many defeats in life, but never let yourself be defeated. - ...",
    "Go confidently in the direction of your dreams! ...",
    "In the end, it's not the years in your life that count. ...",
    "Never let the fear of striking out keep you from playing the game. - ...",
    "In this life we cannot do great things.",
];


let quote = document.getElementById("quote");
function generateButton(){
    var x=quotes[Math.floor((Math.random()*quotes.length))];
    document.getElementById('quote').innerHTML=""+x+"";
    }



