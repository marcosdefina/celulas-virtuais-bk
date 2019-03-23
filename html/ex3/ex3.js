correto = false;
	mf = "";

	function init () {
		mf = document.getElementById('myform');
		for (i = 0; i < 5; i++) mf.opt[i].checked = 0;
		play ("../sound/exerc2");
	}
	function opt_chk () {
		if (mf.opt[3].checked) {
			correto = true;
			play ("../sound/acexerc2");
		} else {
			correto = false;
			play ("");
		}
	}
	function check (n) {
		for (i = 0; i < 5; i++) mf.opt[i].checked = 0;
		mf.opt[n].checked = 1;
		opt_chk ();
	}