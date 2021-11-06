Hooks.on('preCreateActor', function(obj, html){
    var nameAddress = "https://assets.forge-vtt.com/61648b1349625b2b658890e3/abomination%20vaults/"+encodeURIComponent(obj.data.name.trim())+".png"
    obj.data.token._source.img=nameAddress;
    obj.data._source.img=nameAddress;
});
