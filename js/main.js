

var quotes = [
    { 'author' : 'Mahatma Gandhi' , 
    'quote' : 'Live as if you were to die tomorrow. Learn as if you were to live forever'} ,

    
    { 'author' : 'Ralph Waldo Emerson' , 
    'quote' : 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment'} ,


    { 'author' : 'Andre Gide' , 
    'quote' : 'It is better to be hated for what you are than to be loved for what you are not'} ,


    { 'author' : 'Mark Twain' , 
    'quote' : 'Good friends, good books, and a sleepy conscience: this is the ideal life.'} ,


    { 'author' : 'Oscar Wilde' , 
    'quote' : 'We are all in the gutter, but some of us are looking at the stars'} ,


    { 'author' : 'J.K. Rowling' , 
    'quote' : 'It does not do to dwell on dreams and forget to live'} ,


    { 'author' : 'Eleanor Roosevelt' , 
    'quote' : 'A woman is like a tea bag; you never know how strong it is until its in hot water'} ,

    
    { 'author' : 'Neil Gaiman' , 
    'quote' : 'Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.'} ,

    {'author' : 'Johnny Rodrigez ' , 
    'quote' : 'Change is the end result of all true learning.'} ,




  



]

  
   

function dailyQuotes(){
   
    var x = Math.round(Math.random() * quotes.length ) ;

   
        document.getElementById('authorName').innerHTML= quotes[x].author;
        document.getElementById('quote').innerHTML= quotes[x].quote;
   

}
// dailyQuotes();











