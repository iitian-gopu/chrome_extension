$(document).ready(function(){
    var api_key="AIzaSyCQcTJalH_dwTCkaMaiSRomIzMDnRA7MT0"

    var video=""
    

    $("#form").submit(function (event){
        event.preventDefault()
        // alert("form is submitted")

        var search=$("#search").val()
        videoSearch(api_key,search,12)
    })
    function videoSearch(key,search,maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
            console.log(data);

            data.items.forEach(item=>{
                video=`
                  <div style="margin: 5px;
                  padding: 5px;">
                   <iframe width="300" height="300" src="http://www.youtube.com/embed/${item.id.videoId}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullScreen></iframe>
                   
                   <a href="http://www.youtube.com/watch/${item.id.videoId}"
                    style="display:block;" ><button type="button" class="btn btn-secondary">Video Link</button></a>
                  </div> 
                `
                $("#videos").append(video)
            })
        })
    }
})