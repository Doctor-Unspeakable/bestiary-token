Hooks.on('preCreateActor', function(obj, html){
    var fileName = obj.data.name.split(" (")[0].trim();
    var nameAddress = "https://assets.forge-vtt.com/61648b1349625b2b658890e3/bestiary/"+encodeURIComponent(fileName)+".png";
    obj.data.token._source.img=nameAddress;
    obj.data._source.img=nameAddress;
});
