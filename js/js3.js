$("#button").click(function(){
                $.each($("#table tbody tr"), function() {

                    if($(this).text().toLowerCase().indexOf($('#search').val().toLowerCase()) === -1)
                        $(this).hide();
                    else
                        $(this).show();                
                });
            }); 

$("#search").keyup(function(event) { 
            if (event.keyCode === 13) { 
                $("#button").click(); 
            } 
        }); 