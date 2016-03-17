/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  #NavPane_BtnExit */
    $(document).on("click", "#NavPane_BtnExit", function(evt)
    {
        /* your code goes here */
        if(navigator.app)
        {
            navigator.app.exitApp();
        }
        else if(navigator.device)
        {
            navigator.device.exitApp();
        }
    });

        /* button  #NavPaneBtnGrid_BtnFindBooth */


        /* button  #NavPaneBtnGrid_BtnFindBooth */


        /* button  #NavPaneBtnGrid_BtnFindBooth */


        /* button  #NavPaneBtnGrid_BtnFindBooth */


    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
