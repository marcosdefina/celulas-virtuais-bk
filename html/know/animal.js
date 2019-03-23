org = "";
avise = true;
vid = "";

function setVideo (orgname) {
    set_org_tip(orgname);
    org = orgname;
    if (org == "citosol") {
        vid.src = "../blank.gif";
        vid.useMap = "";
        play("../sound/" + org);
    } else {
        vid.src = "../video/" + orgname + ".gif";
        vid.useMap = "#vid_map";
        if (avise) { play("../sound/anime"); avise = false; }
    }
}

function init () {
    vid = document.getElementById('video');
    play('../sound/intro');
}