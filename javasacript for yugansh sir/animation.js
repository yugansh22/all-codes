window.onload = function(e){
    var query_string = window.location.search;
    const urlParams = new URLSearchParams(window.location.search);
    var first_name = urlParams.get('fname');
  
    document.getElementById('welcome-text').innerHTML += ' ' + first_name;
    
}