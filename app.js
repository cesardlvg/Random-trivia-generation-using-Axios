const url = 'https://opentdb.com/api.php?amount=1';

$("#btn").click(function(){
axios.get(url)
.then(function(res){
    //$( "#question" ).append( res.data.results[0].question );
    $( "#question" ).html( res.data.results[0].question );
})
.catch(function(){
    console.log("error");
})
});