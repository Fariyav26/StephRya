$(document).ready(function(){
  $("#create_sighting").on("click", function(){
    var year = $("#sighting_date_1i").val();
    var month = $("#sighting_date_2i").val();
    var day = $("#sighting_date_3i").val();
    var date = year + "-" + month + "-" + day;
    var hour = $("#sighting_time_4i").val();
    var minute = $("#sighting_time_5i").val();
    var time = "2000-01-01T" + hour + ":" + minute + ":00.000Z";
    var latitude = $("#sighting_latitude").val();
    var longitude = $("#sighting_longitude").val();
    var region_id = $("#sighting_region_id").val();
    var region_name = $("#sighting_region_id option:selected").text();
    var animal_id = $("#animal_id").val();

    newSighting = {
      "sighting": {
        "date": date,
        "time": time,
        "latitude": latitude,
        "longitude": longitude,
        "region_id": region_id,
        "animal_id": animal_id
      }
    }

    $.ajax({
      dataType: 'json',
      url: '/sightings',
      method: 'POST',
      data: newSighting,
      success: function(dataFromServer){
        alert("recived message:" + JSON.stringify(dataFromServer));
        var date = dataFromServer.date.split("-")[1] + "/" + dataFromServer.date.split("-")[2] + "/" + dataFromServer.date.split("-")[0];
        var time = dataFromServer.time.substring((dataFromServer.time.indexOf("T") + 1), dataFromServer.time.length - 5);
        var region = dataFromServer.region_id.region

        $("#sighting_list > tbody:last-child").append("<tr><td>" + date + "</td>" + "<td>" + time + "</td>" + "<td>" + dataFromServer.longitude + "</td>" + "<td>" + dataFromServer.latitude + "</td>" + "<td>" + region_name + "</td></tr>");
      },
      error: function(jqHXR, textStatus, errorThrown){
        alert("add new sighting failed:" + errorThrown);
      }
    });
  });


});
