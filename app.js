$(document).ready(function() {
  
  $('#searchButton').click(function() {
  
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    console.log(url);
    $.ajax({
      type: 'GET', 
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: 'json',
     success: function (data, textStatus, jqXHR) {
         
          for(var i = 0; i < data[1].length; i++){
            $('#result').append('<li> <a href=' +data[3][i]+'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>');
          };    
       
        $('#searchTerm').val('');
       },
       
      error: function(errorMessage) {
        alert("error alert");
      }  
    });
    
   
    });
  
   $('#searchTerm').keypress(function(e){
      $(".margin").empty(); //to clear results with new search
      if(e.which == 13) {
        $('#searchButton').click();        
      }
    
 });
});