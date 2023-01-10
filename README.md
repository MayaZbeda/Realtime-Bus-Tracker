# Realtime-Bus-Tracker
A web application that allows you to track the buses on route 1 for MIT using MBTA data and Mapbox. A button can also be pressed to show the stops for one of the specific routes for MIT.

# How to Run: 
* First, download the files in this repository. All the files should be in the same directory.
  * Ensure that you have the bus-tracker.html, style.css, and mapanimation.js
* Then, open the HTML in your browswer. 
  * If this does not work, ensure that all the files are in them directory and are calling each other correctly.

Please note that Mapbox GLS is known to occasionally throw compatibility issues with some browsers that appears as:
"A cookie associated with a cross-site resource at http://mapbox.com/ was set without the SameSite attribute."

This can be fixed by clearing the any cookies made by mapbox on your browser, clearing your cache and refreshing the page. Leaflet is no longer kept up to date some solutions using Mapbox Leaflet features may not work.

# Roadmap of future improvements: 

I found this project particularly challenging as using mapbox made things that were normally more simply coded have an additional layer of difficulty for me as a beginner.

I would like to improve this project with a couple changes that I think would improve both the information it can convey as well as the way that information is expressed to the user. These changes include:
* Changing the theme of the map based on the local time to the buses. This would be most easily done with pulling UTC time, then calculating the difference and tying that to the theme.
* Having each pin also pull the bus number to display so the user could discern which bus was which. 
* Allow bus stops by route, or as a whole, to be shown and hidden by the user with a toggle. I'm not sure if this is particularly possible, but it would be nice to also tie the color of the bus pin and the stops together so users could discern the individual routes.

License information: This should include information about the MIT license. 
