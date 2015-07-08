/*!
* Note: Elesoft is the author of this file, Elesoft is
* offering you a license to use the file.
* Elesoft reserves all other rights.
*
* jQuery JavaScript Library v1.9.0
* http://jquery.com/
* Copyright 2011, John Resig
*
* Date: Thu May 12 12:11:53
*/

$(document).ready(function () {

    $('#datetimepicker1').datetimepicker({
        pickTime: false
    });
    $('#datetimepicker2').datetimepicker({
        pickDate: false,
        pickSeconds: false
    });
    $('#datetimepicker3').datetimepicker({
        pickTime: false
    });
    $('#datetimepicker4').datetimepicker({
        pickDate: false,
        pickSeconds: false
    });
	
	$("#query-modal").modal({
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : false
    });
	
	//$('#edit-map-modal').modal('show');

});

var app = angular.module('historyApp', ['ws.blink']);