$(document).ready(function(){

    $("#x").click(function(){
        $("#crossed").show();
        $("#vanity, #sound, #whispered, #goodbye, #particles, #cig").hide();
        $("#x").hide();
        $("#poem").css('display', 'none');
    });

    $(".index1").click(function(){
        $("#crossed").hide();
        $("#sound, #whispered, #goodbye, #particles, #cig").hide();
        $("#poem").css('display', 'flex');
        $("#vanity").show();
        $("#x").show();
    });
 

    $(".index2").click(function(){
        $("#crossed").hide();
        $("#vanity, #whispered, #goodbye, #particles, #cig").hide();
        $("#poem").css('display', 'flex');
        $("#sound").show();
        $("#x").show();
    });

    $(".index3").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #goodbye, #particles, #cig").hide();
        $("#poem").css('display', 'flex');
        $("#whispered").show();
        $("#x").show();
    });

    $(".index4").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #particles, #cig").hide();
        $("#poem").css('display', 'flex');
        $("#goodbye").show();
        $("#x").show();
    });

    $(".index5").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #goodbye, #cig").hide();
        $("#poem").css('display', 'flex');
        $("#particles").show();
        $("#x").show();
    });

    $(".index6").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#cig").show();
        $("#x").show();
    });




    var Num

    function rvanity() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/vanity.png' id='vanitypic'></center>";
        result[1] = "<div id='vanityword'>104 words</div>";
        result[2] = "<div id='vanitycolor'><svg><rect/></svg></div>";
        result[3] = "<div id='vanitydate'>June 20th, 2021</div>";
        result[4] = "<div id='vanitytitle'>In Vanity</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index1").html(output);
    };

    rvanity();

    // function pvanity() {
    //     var output;
    //     var result = Array(5);
    //     result[0] = "<center><img src='pic/vanity.png' id='vanitypic'></center>";
    //     result[1] = "<div id='vanityword'>104 words</div>";
    //     result[2] = "<div id='vanitycolor'><svg><rect/></svg></div>";
    //     result[3] = "<div id='vanitydate'>June 20th, 2021</div>";
    //     result[4] = "<div id='vanitytitle'>In Vanity</div>";

    //     if (Num === 4) {
    //         Num = 0;
    //     } else {Num = Num +1};
        
    //     var output = result [Num];

    //     $(".index1").html(output);
    // };

    // $(".index1").mouseenter(function(){
    //     pvanity();
    //     console.log(Num);
    // });


    function rsound() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/sound.png' id='soundpic'></center>";
        result[1] = "<div id='soundword'>153 words</div>";
        result[2] = "<div id='soundcolor'><svg><rect/></svg></div>";
        result[3] = "<div id='sounddate'>Oct 6th, 2019</div>";
        result[4] = "<div id='soundtitle'>A Little Sound</div>";

        Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index2").html(output);
    };

    rsound();

    function rwhispered() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/moonlight.png' id='whisperedpic'></center>";
        result[1] = "<div id='whisperedword'>144 words</div>";
        result[2] = "<div id='whisperedcolor'><svg><rect/></svg></div>";
        result[3] = "<div id='whispereddate'>Sep 22nd, 2019</div>";
        result[4] = "<div id='whisperedtitle'>Moonlight</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index3").html(output);
    };

    rwhispered();

    function rgoodbye() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/goodbye.png' id='goodbyepic'></center>";
        result[1] = "<div id='goodbyeword'>57 words</div>";
        result[2] = "<div id='goodbyecolor'><svg><rect/></svg></div>";
        result[3] = "<div id='goodbyedate'>Mar 21st, 2022</div>";
        result[4] = "<div id='goodbyetitle'>Goodbye</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index4").html(output);
    };

    rgoodbye();

    function rparticles() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/particles.png' id='particlespic'></center>";
        result[1] = "<div id='particlesword'>47 words</div>";
        result[2] = "<div id='particlescolor'><svg><rect/></svg></div>";
        result[3] = "<div id='particlesdate'>Sep 18th, 2022</div>";
        result[4] = "<div id='particlestitle'>Particles</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index5").html(output);
    };

    rparticles();

    function rcig() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/cig.png' id='cigpic'></center>";
        result[1] = "<div id='cigword'>119 words</div>";
        result[2] = "<div id='cigcolor'><svg><rect/></svg></div>";
        result[3] = "<div id='cigdate'>Oct 3rd, 2022</div>";
        result[4] = "<div id='cigtitle'>Cig Break</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index6").html(output);
    };

    rcig();


});