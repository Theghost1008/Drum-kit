for(var i=0;i<document.querySelectorAll(".drum").length;i++)// .length will give the number of buttons which have class drum to iterate the loop
{
    //detecting button press
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
        var a = this.innerHTML;
        makeSound(a);
    });
}
// detecting keyboard press
document.addEventListener("keydown", function(event)//when a key is pressed an event is passed to the function, it stores which key was pressed
    {
        makeSound(event.key);//key property of the event is passed
    }
);
function makeSound(key)
{
    switch(key)
    {
        case "w":
            var tom1= new Audio('./sounds/tom-1.mp3');//creates an html audioelement
            tom1.play();
            break;
        case "a":
            var tom2= new Audio('./sounds/tom-2.mp3');//creates an html audioelement
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('./sounds/tom-3.mp3');//creates an html audioelement
            tom3.play();
            break;
        case "d":
            var tom4= new Audio('./sounds/tom-4.mp3');//creates an html audioelement
            tom4.play();
            break;
        case "j":
            var snare= new Audio('./sounds/snare.mp3');//creates an html audioelement
            snare.play();
            break;
        case "k":
            var crash= new Audio('./sounds/crash.mp3');//creates an html audioelement
            crash.play();
            break;
        case "l":
            var kick= new Audio('./sounds/kick-bass.mp3');//creates an html audioelement
            kick.play();
            break;
        default:
            alert("Please press a valid key to make a sound");
            break;
    }
}
// click is function to listen to the clicks done on the button
// operation can be seen from the documentations of the addEventListener attribute


//this.style.color="white";//this is the identity of the button that triggered the event listener