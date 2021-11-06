Hooks.on('preCreateActor', function(obj, html){
    var fileName = obj.data.name.split(" (")[0].trim();
    console.log("Bestiary Token creating "+fileName); 
    var nameAddress = "https://assets.forge-vtt.com/61648b1349625b2b658890e3/tokens/"+fileName+".png";
    obj.data.token._source.img=encodeURI(nameAddress);
    obj.data._source.img=nameAddress;
});
