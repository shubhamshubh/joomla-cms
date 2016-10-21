/**
 * @package         Joomla.JavaScript
 * @copyright       Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license         GNU General Public License version 2 or later; see LICENSE.txt
 */

/**
 * Calls the sending process of the config class
 */
"use strict";

var sendTestMail = function() {

	var urlExtra = '', email_data = {
		smtpauth  : document.querySelector('[name="jform[smtpauth]"]').value,
		smtpuser  : document.querySelector('[name="jform[smtpuser]"]').value,
		smtppass  : document.querySelector('[name="jform[smtppass]"]').value,
		smtphost  : document.querySelector('[name="jform[smtphost]"]').value,
		smtpsecure: document.querySelector('[name="jform[smtpsecure]"]').value,
		smtpport  : document.querySelector('[name="jform[smtpport]"]').value,
		mailfrom  : document.querySelector('[name="jform[mailfrom]"]').value,
		fromname  : document.querySelector('[name="jform[fromname]"]').value,
		mailer    : document.querySelector('[name="jform[mailer]"]').value,
		mailonline: document.querySelector('[name="jform[mailonline]"]').value
	};

	// Remove js messages, if they exist.
	Joomla.removeMessages();

	// Serialise the data
	if (email_data){
		for (var p in email_data){
			if (email_data.hasOwnProperty(p)) {
				urlExtra += '&' + p + '=' + email_data[p];
			}
		}

		// Prepare the options
		var ajaxOptions = {
			url:    document.getElementById('sendtestmail').getAttribute('data-ajaxuri') + urlExtra,
			method: 'POST',
			data:    '',
			perform: true,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		};

		var xhr = Joomla.request(ajaxOptions);

		Joomla.ajaxErrorsMessages(xhr, xhr.response, error)
	}
};

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#sendtestmail').addEventListener('click', sendTestMail);
});
