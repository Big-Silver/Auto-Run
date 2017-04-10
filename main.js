$(document).ready(function()
{
    var location = "";
    setInterval(function()
    {
        if(location != window.location.href)
        {
            location = window.location.href;
            if(window.location.href == "Domain Url1") {
                //add code to action when url is changed to "Domain Url1"
            }
            else if(window.location.href == "Domain Url2") {
                //add code to action when url is changed to "Domain Url2"
            }
            else
                return;
        }        
    }, 1000);
});
