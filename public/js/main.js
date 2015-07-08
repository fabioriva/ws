/*!
* Note: Elesoft is the author of this file, Elesoft is
* offering you a license to use the file.
* Elesoft reserves all other rights.
*
* Date: Thu May 12 12:11:53
*/

function activeMenu(menu){
	$('.navbar li:eq(' + menu + ')').addClass('active');
};

function activeMenuRight(menu){
	$('.navbar-right li:eq(' + menu + ')').addClass('active');
};

function activeNav(nav_id, nav){
	$('#' + nav_id + ' li:eq(' + nav + ')').addClass('active');
};

function activeTab(tab_id, tab){
	$('#' + tab_id + ' li:eq(' + tab + ') a').tab('show');
};

function scrollBottom(e) {
	/* some Magic */
	var h = $(e)[0].scrollHeight;
	$(e).scrollTop(h);
}