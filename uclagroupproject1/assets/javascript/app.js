$(document).ready(function(){
    var APIforEvan = "BgwAiMT";
    
    var APIforCR = "cfbcda2ca9b6fa70bc7d1f0bf8a117d078fbdc81";
    
    var allFlavors = [];
    var allEffects = [];
    
    function renderFlavorButtons(){
        $(".all-flavor-buttons").empty();
        
        allFlavors.sort();
        for (var i=0; i<allFlavors.length; i++){
            var tempButton = $("<button>");
            tempButton.addClass("flavor-list-item btn btn-success btn-sm " + allFlavors[i]);
            tempButton.attr("data-name", allFlavors[i]);
            tempButton.text(allFlavors[i]);
            $(".all-flavor-buttons").append(tempButton);
        }
        allFlavors = [];
    }
    
    function renderEffectsButtons(){
        $(".all-effect-buttons").empty();
        
        allEffects.sort();
        for (var i=0; i<allEffects.length; i++){
            var tempButton = $("<button>");
            tempButton.addClass("effect-list-item btn btn-success btn-sm " + allEffects[i]);
            tempButton.attr("data-name", allEffects[i]);
            tempButton.text(allEffects[i]);
            $(".all-effect-buttons").append(tempButton);
        }
        allEffects = [];
    }
    
    //Hitting All Flavors button
    var hasClickedAllFlavors = false;
    
    $(".all-flavors").on("click", function(event){
        event.preventDefault();
    
    
        console.log("all flavors pressed");
       if(hasClickedAllFlavors){
            $(".flavor-list-item").toggle();
    
        }
        else{
          var queryURL = "http://strainapi.evanbusse.com/" + APIforEvan + "/searchdata/flavors";
            $.ajax({
                dataType: "json",
                url: queryURL,
                method: "GET"
            }).done(function(response){
                console.log(response);
    
                for (var i=0; i < response.length; i++){
                    allFlavors.push(response[i]);         
            }
    
            renderFlavorButtons();
        })
        .fail(function(xhr,status,error){
            console.log(error);
        }); 
        hasClickedAllFlavors = true;
       }
        
        
    });
    
    var pickedFlavor = false;
    
    //Picking flavor button
    $(document).on("click", ".flavor-list-item",function(){
        
        pickedFlavor = true;
    
        console.log("you have picked an flavor.");
            var flavor = $(this).attr("data-name");
            console.log(flavor);
        
            var queryURL = "http://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/flavor/" + flavor;
            $.ajax({
                dataType: "json",
                url: queryURL,
                method: "GET",
            }).done(function(response){
    
    
                if(pickedEffect){
                    //check to see if strains from flavor match strain from effect and only show if they have both.
                        for(var i=0; i < response.length; i++){
                            
                            if($(".choice").hasClass(response[i].name)){
                                console.log(response[i].name);
                                console.log("Has both flavor and effect");
                                var name = response[i].name;
                               $("."+response[i].name).removeClass("preference");
                               $("."+response[i].name).addClass("special");
                         
                            }
                        }
                    
                        $(".preference").toggle();
                    }
                    else{
                        $(".testcontent").empty();  
               
                        for (var i = 0; i < response.length; i++) {
                            var name = response[i].name;
                            var tempButton = $("<button>");
                            tempButton.addClass("choice btn btn-success btn-sm preference " + name);
                            tempButton.attr("data-name",name);
                            tempButton.text(name);
                            $(".testcontent").append(tempButton);
                        }
                    }
                
            })
        
        });
    
    //Location Stuff
    $(document).on("click", ".locator-btn", function(){
        console.log("I pressed the locator");
    });
    
    //  $("<input type ='button' onclick ='getLocation()' value = 'Locate me'>").append(".testcontent");
    //  $(".testcontent").append("<input type ='button' onclick ='getLocation()'>");
    // var myLat ="" ;
    // var x = document.getElementById("locator");
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //         console.log(showPosition);
    //     } else { 
    //         x.innerHTML = "Geolocation is not supported by this browser.";
    //     }
    // }
    
    // function showPosition(position) {
    //     x.innerHTML = "Latitude: " + position.coords.latitude + 
    //     "<br>Longitude: " + position.coords.longitude;
    
    //      console.log(position.coords.latitude);
    //      console.log(typeof position.coords.latitude);
    // console.log(position.coords.longitude); 
    // }
    
    
    
    
    //Flavor Input Field
    $(".flavor-submit").on("click", function(event){
        event.preventDefault();
    
    console.log("flavor pressed");
        var flavor = $(".flavor-input").val().trim();
        var queryURL = "http://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/flavor/" + flavor;
        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET"
        }).done(function(response){
            console.log(response);
        })
        .fail(function(xhr,status,error){
            console.log(error);
        });
    
    });
    
    // For strain input field================================================================================
    $(".strain-submit").on("click", function(event){
        event.preventDefault();
    
        console.log("strain pressed");
        var strain = $(".strain-input").val().trim();
        // var pageNumber = 1;
        // var queryURL = "http://api.otreeba.com/v1/strains?page="+ pageNumber + "&count=50&sort=name";
    
        var queryURL0 = "http://strainapi.evanbusse.com/" + APIforEvan + "/strains/search/name/" + strain;
    
       var queryURL1 = "https://www.cannabisreports.com/api/v1.0/strains/search/" + strain;
    
        //     $.getJSON("http://www.cannabisreports.com/api/v1.0/strains/VUJCJ4TYMG000000000000000", function(data) { 
        //     console.log(data);
        // });
    
        //searches evanbuss api
        $.ajax({
            dataType: "json",
            url: queryURL0,
            method: "GET"
        }).done(function runData (response){
            
            console.log(response);
           var topResults = $(".testcontent").html("Top Search Results: <br>");
            topResults;
            for (var i = 0; i < response.length; i++) {
                var name = response[i].name;
                var tempButton = $("<button>");
                tempButton.addClass("choice btn btn-success btn-sm preference eb " + name);
                tempButton.attr("data-name",name);
                tempButton.text(name);
                // $(".testcontent").append(tempButton);
            }
    
        })
        .fail(function(xhr,status,error){
            console.log(error);
        });
    
        //searches CR API
        $.ajax({
            dataType: "jsonp",
            url: queryURL1,
            method: "GET",
        }).done(function runData (response){
            
            console.log(response);
    
            for (var i = 0; i < response.data.length; i++) {
                var name = response.data[i].name;
                var tempButton = $("<button>");
                tempButton.addClass("choice btn btn-success btn-sm preference cr " + name);
                tempButton.attr("data-name",name);
                tempButton.text(name);
                $(".testcontent").append(tempButton);
            }
    
            //if there is another page of results.
            if(response.meta.pagination.links.next){
                console.log("There is another page");
                var tempButton = $("<button>");
                tempButton.addClass("next btn btn-success btn-sm ");
                tempButton.attr("data-link",response.meta.pagination.links.next);
                tempButton.text("Next Page");
                $(".testcontent").append(tempButton);
                
            }
    
            // if(response.meta.pagination.links.previous){
            //     console.log("There is previous page");
            //     var tempButton = $("<button>");
            //     tempButton.addClass("previous btn btn-success btn-sm ");
            //     tempButton.attr("data-link",response.meta.pagination.links.previous);
            //     tempButton.text("Previous Page");
            //     $(".testcontent").append(tempButton);
                
            // }
    
            var pageNumber = 2;
            $(document).on("click", ".next", function(){
                    $(".choice").remove();
                
                var nextURL = "https://www.cannabisreports.com/api/v1.0/strains/search/" +strain + "?q=" +strain+"&page=" +pageNumber;
                console.log(nextURL);
    
                $.ajax({
                    dataType: "jsonp",
                    url: nextURL,
                    method: "GET",
                }).done(function(response){
                    console.log(response);
    
                    for (var i = 0; i < response.data.length; i++) {
                        var name = response.data[i].name;
                        var tempButton = $("<button>");
                        tempButton.addClass("choice btn btn-success btn-sm preference cr " + name);
                        tempButton.attr("data-name",name);
                        tempButton.text(name);
                        $(".testcontent").prepend(tempButton);
                    }
                    // $(".testcontent").prepend(response);
                    console.log("Next button works");
                })
                pageNumber++;
    
                if(response.meta.pagination.links.previous){
                    console.log("There is previous page");
                    var tempButton = $("<button>");
                    tempButton.addClass("previous btn btn-success btn-sm preference ");
                    tempButton.attr("data-link",response.meta.pagination.links.previous);
                    tempButton.text("Previous Page");
                    $(".testcontent").append(tempButton);
                    
                }
    
                });
    
                $(document).on("click", ".previous", function(){
                
                    var previousURL = "https://www.cannabisreports.com/api/v1.0/strains/search/" +strain + "?q=" +strain+"&page=" +pageNumber;
                    console.log(previousURL);
        
                    $.ajax({
                        dataType: "jsonp",
                        url: previousURL,
                        method: "GET",
                    }).done(function(response){
                        console.log(response);
                        $(".testcontent").prepend(response);
                        console.log("previous button works");
                    })
                    pageNumber--;
                    });
    
                })
                .fail(function(xhr,status,error){
                    console.log(error);
                });
    
                
    });
    
    //============================================================================================
    
    
    //All effects button
    var hasClickedAllEffects = false;
    $(".all-effects").on("click", function(event){
        event.preventDefault();
    
        console.log("all effects pressed");
    
        if(hasClickedAllEffects){
            $(".effect-list-item").toggle();
        }
        else{
    
            var queryURL = "http://strainapi.evanbusse.com/" + APIforEvan + "/searchdata/effects";
            $.ajax({
                dataType: "json",
                url: queryURL,
                method: "GET"
            }).done(function(response){
            console.log(response);
    
            for (var i=0; i < response.length; i++){
                allEffects.push(response[i].effect);   
            }
    
            renderEffectsButtons();
        })
        .fail(function(xhr,status,error){
            console.log(error);
        });
    
        hasClickedAllEffects = true;
        }
        
    
    });
    
    var pickedEffect = false;
    
    //Picking effect button
    $(document).on("click", ".effect-list-item",function(){
         console.log("you have picked an effect.");
         pickedEffect = true;
    //    $(noMatch).remove();
    //    $(topResults).remove();
                var effect = $(this).attr("data-name");
                console.log(effect);
        
                var queryURL = "http://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/effect/" + effect;
                $.ajax({
                    dataType: "json",
                    url: queryURL,
                    method: "GET",
                }).done(function(response){
                console.log(response);
    
    
                if(pickedFlavor){
                //check to see if strains from flavor match strain from effect and only show if they have both.
                    for(var i=0; i < response.length; i++){
                        
                        if($(".choice").hasClass(response[i].name)){
                            console.log(response[i].name);
                            console.log("Has both flavor and effect");
                            var name = response[i].name;
                           $("."+name).removeClass("preference");
                           $("."+name).addClass("special");
                     
                        }
                    }
                
                    $(".preference").toggle();
                }
                else{
                    $(".testcontent").empty();  
           
                    for (var i = 0; i < response.length; i++) {
                        var name = response[i].name;
                        var tempButton = $("<button>");
                        tempButton.addClass("choice btn btn-success btn-sm preference " + name);
                        tempButton.attr("data-name",name);
                        tempButton.text(name);
                        $(".testcontent").append(tempButton);
                    }
                }
    
            })
            
           
        
        });
    
    //Effect input field
    $(".effect-submit").on("click", function(event){
        event.preventDefault();
    
    console.log("effect pressed");
    
        var effect = $(".effect-input").val().trim();
        var queryURL = "http://strainapi.evanbusse.com/" +APIforEvan + "/strains/search/effect/" + effect;
        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET"
        }).done(function(response){
    console.log(response);
    
        })
        .fail(function(xhr,status,error){
            console.log(error);
        });
    
    });
    
    var myUCPC = "";
    //Hitting a choice button
    $(document).on("click", ".choice", function(){
        myUCPC = "";
        // $(noMatch).remove();
        // $(topResults).remove();
        $(".strain-display").empty();
        var myChoice = $(this).attr("data-name");
        var queryURL = "https://www.cannabisreports.com/api/v1.0/strains/search/" + myChoice;
        
        console.log("I made a choice");
        $.ajax({
            dataType: "jsonp",
            url: queryURL,
            method: "GET",
        }).done(function(response){
            console.log(response);
            for(var i=0; i < response.data.length; i++){
    
                console.log("entered for loop");
    
                if(response.data[i].name === myChoice){
                    console.log("exact match");
    
                    $(".strain-display").append("<img class = 'strain-photo' src =" + response.data[i].image +"><br>");
                    $(".strain-display").append("Name: " + response.data[i].name + "<br>");
                    
                    var genetics = JSON.stringify(response.data[i].genetics.name);
                    $(".strain-display").append("Genetics: " + genetics + "<br>");
    
                    var lineage = JSON.stringify(response.data[i].lineage);
                    $(".strain-display").append("Origins: " + lineage + "<br>");
    
                    myUCPC = response.data[i].ucpc;
                   
                    var EFQueryURL = "https://www.cannabisreports.com/api/v1.0/strains/" + myUCPC + "/effectsFlavors";
    
                    $.ajax({
                        dataType: "jsonp",
                        url: EFQueryURL,
                        method: "GET",
                    }).done(function(EFresponse){
                        console.log(EFresponse);
                        var effectsFlavors = JSON.stringify(EFresponse.data); 
                        console.log(effectsFlavors);
                        $(".strain-display").append(effectsFlavors);
    
                    })
                    .fail(function(xhr, status, err) {
                        console.log(err);
                    })
            
                    //search through for effects/flavors for strain you picked
    
                }
                else{//no exact match, show close matches
                    console.log("no exact match.. show options");
                    $(".testcontent").empty();
    
                    var noMatch = $(".testcontent").html("There is no exact match. Did you mean...? <br>");
                    noMatch;
                    for(var i = 0; i < response.data.length; i++){
                        console.log("entered for loop");
                        var name = response.data[i].name;
                        var tempButton = $("<button>");
                        tempButton.addClass("choice btn btn-success btn-sm preference " + name);
                        tempButton.attr("data-name",name);
                        tempButton.text(name);
                        $(".testcontent").append(tempButton);
                    }
    
    
    
                }
            }
        });
    
    });
    });