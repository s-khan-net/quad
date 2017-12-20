//global map var
var exitBit=false;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
   
    onDeviceReady: function() {
        //set margin for loc buttonm
        checkState();
       document.addEventListener('backbutton', function(event){
            event.preventDefault(); // EDIT
            if(exitBit){
                    window.plugins.toast.hide();
                    navigator.app.exitApp();
                }
                else{
                    window.plugins.toast.showShortBottom("Press again to exit");
                    exitBit = true;
                    setTimeout(function(){exitBit = false},2000);
                }
        });
    },
};
function checkState(){
    var networkState = navigator.connection.type;
    if(networkState == Connection.NONE)
        {
            $('#splashText').html('location available<br>Network unavailable<br>Please enable wifi or data services on your device...');
        }
        else
        {
            setTimeout(function(){
                $('#splash').hide();
            },3000);
            init_map1();
        }
}
function showTos()
{
 $("#termsModal").modal({
       backdrop: "static"
  });
}
function init_map1() {
    var myLocation = new google.maps.LatLng(12.354507, 76.603043);
    var mapOptions = {
        center: myLocation,
        zoom: 16
    };
    var marker = new google.maps.Marker({
        position: myLocation,
        title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"),
        mapOptions);
    marker.setMap(map);
}
function hideMenu()
{
    $('.navbar-collapse').removeClass('in');
}
function scrollHome()
{
    hideMenu();
    $('html, body').animate({scrollTop : 0},1000);
    removeallavtive();
}
function scrollAbout()
{
    hideMenu();
    var g = 880
    $('html, body').animate({scrollTop : g},1000);
}
function scrollContact()
{
    hideMenu();
    var g = 2150;
    $('html, body').animate({scrollTop : g},1000);
}