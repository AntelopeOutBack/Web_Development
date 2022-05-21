console.log($) // Do this to make sure js is connected
$("ul").on("click", "li", function(){  //selecting or grabbing the whole list, and then specifying only the list item clicked
    $(this).toggleClass("completed") //on this item being selected (the list item being clicked), 
})

$("ul").on("click", "span", function(){
    $(this).parent().remove();
});

//propagation, specifically bubbling

//Create
$("input").keypress(function(event){
    if(event.which === 13 && $(this).val().trim()){
    let listItem = $(this).val();//grab the value of whatever is in input
    $("ul").append(
        `<li>
        ${listItem}
            <span><i class="fa fa-trash-alt"></i></span></li>`
    );
    $(this).val("")
    }
})

//if something exists, it's true. if it doesn't exist, it's false
//this souds like a prochoice prolife arguemtn

//what can go wrong and what do we do to prevent it

