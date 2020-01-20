$(document).ready(function(){
    var imageLink;
    var width;
    var height;
    var title;
    var totalViews;
    var totalSubscribers;
    var totalVideos;
    var channelId;
    var url;

    $("form").submit(function(){
        /*fetch the value
        that entered in the Input;
        */
       channelId = $("#search").val();
       //api-key  AIzaSyAGf7s-HBBeqohEPIVMp_aPpq3hvrnkZOg
       url = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAGf7s-HBBeqohEPIVMp_aPpq3hvrnkZOg&id=" + channelId + "&part=snippet,contentDetails,statistics";

       $.get(url,function(data){
           fetchdata(data);

           binddata(imageLink,width,height,title,totalSubscribers,totalViews,totalVideos);
       });

       
       /*
       setInterval(function(){

        url = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAGf7s-HBBeqohEPIVMp_aPpq3hvrnkZOg&id=" + channelId + "&part=statistics";
        $.get(url,function(data){
            updateSubscribers(data);
            
        });

       },0);
       */
       return false;

    });

    function fetchdata(data)
    {
        imageLink = data.items[0].snippet.thumbnails.medium.url;
        width = data.items[0].snippet.thumbnails.medium.url.width;
        height = data.items[0].snippet.thumbnails.medium.url.height;
        title = data.items[0].snippet.title;
        totalSubscribers = data.items[0].statistics.subscriberCount;
        totalViews = data.items[0].statistics.viewCount;
        totalVideos = data.items[0].statistics.videoCount;

    }

    function binddata(imageLink,width,height,title,totalSubscribers,totalViews,totalVideos)
    {
        $("#thumbnail").attr("src",imageLink);
        $("#thumbnail").attr("width",width);
        $("#thumbnail").attr("height",height);
        $("#title").html(title);
        $("#subscribers").html("<h5>Subscribers</h5>" + totalSubscribers);
        $("#totalViews").html("<h5>TotalViews</h5>" + totalViews);
        $("#totalVideos").html("<h5>TotalVideos</h5>" + totalVideos);
        
    }
     /*
    function updateSubscribers(data)
    {
        $("#subscribers").html("<h5>Subscribers</h5>" + data.items[0].statistics.subscriberCount);
    }
    */
});