# Auto-Run

## About
This project was built using Javascript and Jquery by [Big Silver].
When URL is changed, the video or action run automatically regarding the content of page.

## Main.js
```javascript
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

            ....

            else
                return;
        }        
    }, 1000);
});
```
