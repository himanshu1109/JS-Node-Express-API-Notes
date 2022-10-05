// To Add
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
$(document) // Selects the entire document

// Selecting Elements
$("h1"); // in quotations there will be css selectors
$("button"); // it selects all occurences

// Manipulating styles
$("h1").css("font-size"); // it will give property value i.e. get
$("h1").css("font-size","10rem"); // it will set the property value 

// Adding classes
$("h1").addClass("class-name");
$("h1").addClass("class-name class-2-name"); // Add Multple Classes

// Removing Classes
$("h1").removeClass("class-name");
$("h1").removeClass("class-name class-2-name"); // Remove Multple classes

// Checking if selector contains particular class or not
$("h1").hasClass("class-name"); // returns true or false

// Manipulating texts
$("h1").text("Bye"); // To change text
$("h1").html("html code"); // To change innerHTML

// Manipulating attributes
$("img").attr("src"); // To get current value of the attributes
$("a").attr("href","www.google.com"); // To set or change attributes value
$("h1").attr("class"); // it will give all current classes set in the selector

// Adding Event Listeners
$("h1").click(function); // click Listener 
$("button").click(function(){
    $("h1").css("color","red");  // selects all button and apply click listener on them
})
$("input").keydown(function(event){
    console.log(event.key);     // keydown listener
})

// Adding any listener using on
$("selector").on(eventlistener, function);

// Adding elements
$("h1").before("<button>Click Me</button>"); // before -- adding before selector 
$("h1").after("<button>Click Me</button>"); // after -- adding afte selector 
$("h1").prepend("<button>Click Me</button>"); // prepend -- adding at the start between the selector opening and closing tags i.e. just after opening
$("h1").append("<button>Click Me</button>"); // append -- adding at the last between the selector opening and closing tags i.e. just before closing

// removing elements
$("button").remove(); // remove all buttons from website

// Animations
$("h1").hide(); // hides the selector
$("h1").show(); // shows the selector
$("h1").toggle(); // hides the selector if showing and show if hiding
$("h1").fadeOut(); // hides the selector slowly
$("h1").fadeIn(); // shows the selector slowly
$("h1").fadeToggle(); // fadeIn if fadeOut and fadeOut if fadeIn
$("h1").slideUp(); // collapses the selector
$("h1").slideDown(); // Uncollapses the selector
$("h1").slideToggle(); // slideUp if slideDown and slideDown if slideUp

// Adding custom animations
$("h1").animate({opacity:0.5}); // can use only properties having numeric values

// Chaining Animations
$("h1").slideUp().slideDown().animate({opacity:0.5});