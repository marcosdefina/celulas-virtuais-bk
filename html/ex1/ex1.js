org_sel = "none";
	n_org = 9;
	org_ind = 0;
	org_cnt = new org_count (0);
	vid = "";

	function org_count (n) {
		this[1] = 1;
		this[2] = 4;
		this[3] = 1;
		this[4] = 1;
		this[5] = 9;
		this[6] = 6;
		this[7] = 1;
		this[8] = 1;
		this[9] = 1;
	}

	function set_tip () {
		set_org_tip (org_sel);
		switch (org_sel) {
			case "nucleo": org_ind = 1; break;
			case "mitocondria": org_ind = 2; break;
			case "rerugoso": org_ind = 3; break;
			case "golgi": org_ind = 4; break;
			case "ribossomo": org_ind = 5; break;
			case "lisossomo": org_ind = 6; break;
			case "reliso": org_ind = 7; break;
			case "centriolos": org_ind = 8; break;
			case "membrana": org_ind = 9; break;
			default: org_ind = 0; if (n_org != 0) document.getElementById("org_tip").innerHTML = "Escolha uma organela";
		}
	}

	function orgclick (orgname, orgnum) {
		if (org_sel == orgname) {
			org = document.getElementById(orgname + orgnum);
			org.src = orgname + orgnum + ".gif";

			org_cnt[org_ind]--;
			if (org_cnt[org_ind] == 0) {
				ico = document.getElementById("ico_" + orgname);
				ico.className = 'm_out';
				ico.useMap = '';
				n_org--;
				org_sel = "none";

				if (n_org == 0) {
					vid.src = "msg_ok.jpg";
					play ("../sound/acexerc0");
				} else
					vid.src = "msg_select.jpg";
			}

			if (orgname == "nucleo" || orgname == "rerugoso") {
				if (org_cnt[1] == 0 && org_cnt[3] == 0)
					document.getElementById("misto").useMap = ""
				else
					document.getElementById("misto").useMap = (org_cnt[1] == "0")? "#rer_map" : "#nucleo_map";
			} else
				org.useMap = "";
		} else {
			vid.src = (org_sel == "none")? "msg_err1.jpg" : "msg_err2.jpg";
			org_sel = "none";
		}
		set_tip();
	}

	function init () {
		vid = document.getElementById("video");
		set_tip ();
		play ("../sound/exerc0");
	}

	function set_org (orgname) {
		org_sel = orgname;
		document.getElementById('video').src="../video/" + orgname + ".gif";
		set_tip ();
	}