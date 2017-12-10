var io = io('http://localhost:3000');

var getSnap = () => {
    io.emit("getSnap");
    clearSnaps();
};

var quit = () => {
    io.emit("end");
    clearSnaps();
};

io.on("message", (ip) => {
    console.log("Server sent image write event of: ", ip);
    var snapgallery = document.getElementsByClassName("snapgallery")[0];

    var snapipdiv = document.createElement("div");
    snapipdiv.className = "snapip col-md-3 col-sm-3 col-xs-6";

    var snapsdiv = document.createElement("div");
    snapsdiv.className = "snaps";

    var img = document.createElement("img");
    img.src = "screenshots/" + ip + ".jpg";
    img.height = "150";
    img.width = "266";

    var ipdiv = document.createElement("div");
    ipdiv.className = "ip";
    ipdiv.innerHTML = ip; 

    snapsdiv.appendChild(img);
    snapsdiv.appendChild(ipdiv);
    
    snapipdiv.appendChild(snapsdiv);

    snapgallery.appendChild(snapipdiv);
});

function clearSnaps() {
    var snapgallery = document.getElementsByClassName("snapgallery")[0];
    while (snapgallery.firstChild) {
            snapgallery.removeChild(snapgallery.firstChild);
    }
}

function checkData(){
	var ip = document.getElementsByName('ip')[0];
    var netmask = document.getElementsByName('netmask')[0];
	console.log("IP: ", ip.value);
	console.log("NetMask: ", netmask.value);
    clearSnaps();
    return true;
}
