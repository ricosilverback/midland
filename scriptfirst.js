$(document).ready(function(){
    $(".sfb").click(function(){
        $(".no").text("NOT AVAILABLE")
        $(".no").css("background-color", "red");
    });
});
$(document).ready(function(){
    $(".kwb").click(function(){
        $(".kw").text("Pack Your Bags!!");
    });
});
$(document).ready(function(){
    $(".rcb").click(function(){
        $(".rc").text("Pack Your Bags!!");
    });
});
$(document).ready(function(){
    $(".seab").click(function(){
        $(".sea").text("Pack Your Bags!!");
    });
});
$(document).ready(function(){
    $(".wichb").click(function(){
        $(".wich").text("NOT AVAILABLE!!")
        $(".wich").css("background-color", "red");
    });
});
$(document).ready(function(){
    $(".kcb").click(function(){
        $(".kc").text("Pack Your Bags!!");
    });
});
$(document).ready(function(){
    $("#regbtn").click(function(){
        $(".fuckoff").text("FUCKOFF BITCHES");
        $(".fuckoff").css({"font-size":"150px","align":"right"})
    });
});

$(document).ready(function(){
    $(".btnsales").click(function(){
        $(".btnsales").slideUp(1500);
        $(".salesp").text('Call Sebastian for More Info');
        $(".salesp").css({background:'white',color:'black'})
    });
});

$(document).ready(function(){
    $('.btnweed').on('mouseover',function(){
        $('.promoweed').fadeToggle(2000)
    });
});

$(document).ready(function(){
    $(".btnbeer").click(function(){
        $(".promobeer").text('I Love Beer');
        $(".btnbeer").hide(2000).show(2000)
    });
});

$(function(){
    $('.kcb').on('click',function(){
        var ticket={destination:'Kansas City',travelTime:'2 hours',taxes:'10%'}
        alert(ticket);
    });
});
$(document).ready(function(){
    $(".btnmdl").click(function(){
        $('.btnmdl').hide();
    });
});
$(document).ready(function(){
    $('.btnmdl2').click(function(){
        price=25;
        tax=.09;
        hotel=70;
        transport=20;
        food=55;        
        subTotal=(price+hotel+transport+food);
        total=(subTotal*tax);               
    $('.btnmdl2').text(subTotal+total);
        });
    });
    $(document).ready(function(){
        $(".schbtn2").click(function(){
            $(".schbtn2").hide();
        });
    });