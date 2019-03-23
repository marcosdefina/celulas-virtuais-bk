set = new vetor(4);
	opt = 0;
	correto = false;

	function vetor (n) {
		for (i = 1; i <= n; i++) this[i] = 0;
	}

	function org_click (n) {
		if (opt != 0) document.getElementById('org' + opt).style.background = "url(none)";
		document.getElementById('org' + n).style.background = "url('../ex2/select.gif')";
		opt = n;
	}

	function bullet_click (n) {
		if (opt == '0')
			alert("Selecione uma organela primeiro!")
		else {
			for (i = 1; i < 5; i++) if (set[i] == n) set[i] = 0;
			set[opt] = n;

			for (i = 1; i < 5; i++) {
				obj = document.getElementById('line' + String(i));
				y = (i - 1) * 102 + 176;
				if ((set[i] - i) < 0) y += (set[i] - i) * 102;
				obj.style.top = y;
				obj.src = (set[i] == 0)? "../ex1/blank.gif" : "../ex2/arrow" + String(set[i] - i + 4) + ".gif";
			}

			with (document) {
				if (set[1] == 2 && set[2] == 1 && set[3] == 3 && set[4] == 4) {
					getElementById('org' + opt).style.background = "url(none)";
					play ("../sound/acexerc2");
					correto = true;
				} else correto = false;
			}
		}
	}

	function init () {
		play ("../sound/exerc1");
	}