isMSIE = (navigator.appName == "Microsoft Internet Explorer");

function play (arquivo) {
	if (isMSIE) {
		document.getElementById('sound').innerHTML =
			"<object type='video/x-ms-wmv' data='" + arquivo + ".mp3'>"
			+ "<param name='src' value='" + arquivo + ".mp3' />"
			+ "<param name='autostart' value='true' />"
			+ "</object>";
	} else {
		document.getElementById('sound').innerHTML =
			"<object type='audio/mpeg' data='" + arquivo + ".mp3'>"
			+ "<param name='url' value='" + arquivo + ".mp3' />"
			+ "<param name='src' value='" + arquivo + ".mp3' />"
			+ "<param name='autostart' value='true' />"
			+ "<param name='autoplay' value='true' />"
			+ "</object>";
	}
}

function org_desc (org_name) {
	switch (org_name) {
		case "ribossomo": return "Ribossomo" ; break;
		case "centriolos": return "Centr&iacute;olos" ; break;
		case "citoesqueleto": return "Citoesqueleto" ; break;
		case "cloroplasto": return "Cloroplasto" ; break;
		case "glioxissomo": return "Glioxissomo" ; break;
		case "golgi": return "Complexo de Golgi" ; break;
		case "lisossomo": return "Lisossomo" ; break;
		case "membrana": return "Membrana Plasm&aacute;tica" ; break;
		case "mitocondria": return "Mitoc&ocirc;ndria" ; break;
		case "nucleo": return "N&uacute;cleo" ; break;
		case "peroxissomo": return "Peroxissomo" ; break;
		case "reliso": return "Ret&iacute;culo Endoplasm&aacute;tico Liso" ; break;
		case "rerugoso": return "Ret&iacute;culo Endoplasm&aacute;tico Rugoso" ; break;
		case "vacuolo": return "Vac&uacute;olo" ; break;
		case "plasmodesmo": return "Plasmodesmo" ; break;
		case "parede_veg": return "Parede Celular" ; break;
		case "parede_pro": return "Parede Celular" ; break;
		case "citosol": return "Citosol" ; break;
		case "fimbria": return "F&iacute;mbria" ; break;
		case "capsula": return "C&aacute;psula" ; break;
		case "flagelo": return "Flagelo" ; break;
		case "mesossomo": return "Mesossomo" ; break;
		case "plasmideo": return "Plasm&iacute;deo" ; break;
		case "nucleoide": return "Nucle&oacute;ide" ; break;
		default: return "^_^";
	}
}

function close_org_wnd () {
	var obj = document.getElementById("img_show");
	obj.innerHTML = "";
	play('');
}

function org_wnd (org_name) {
	var obj = document.getElementById("img_show");
	obj.innerHTML = (org_name == "mitocondria")? "<img id='mito_desc' src='../video/mito_desc.gif'>"
		+ "<img id='mito_open' src='../video/mito_open.gif?" + Math.random() + "' onClick='close_org_wnd()' title='Clique na imagem para fechar'>"
		: "<img id='org_gif' src='" + org_name + ".gif' onClick='close_org_wnd()' title='Clique na imagem para fechar'>";
}

function vid_click () {
	play ("../sound/" + org)
	org_wnd (org);
}

function set_org_tip (org_name) { document.getElementById("org_tip").innerHTML = org_desc(org_name) }

