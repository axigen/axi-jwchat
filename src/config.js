/*
 * JWChat, a web based jabber client
 * Copyright (C) 2003-2008 Stefan Strigler <steve@zeank.in-berlin.de>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 *
 * Please visit http://jwchat.sourceforge.net for more information!
 */

/*
 * This is the main configuration file for the chat client itself.
 * You have to edit this before you can use jwchat on your website!
 *
 * Have a look at the README for hints and troubleshooting!
 */

// if connection is secure, SSL encryption will be used
var CONNECTION_SECURE = true;

// define the server url to connect on
//var IM_SERVER_URL = "https://mydomain.com:5280/http-bind/";
var IM_SERVER_URL = "/http-bind/";

// using base url you can compute the server url
// var baseUrl = top.Axi.AccountInfo.baseUrl;

// IM_SERVER_URL = "https://" + window.location.hostname + "/http-bind/";

var DOMAIN_NAME = top.Axi.AccountInfo.domainname;
var SITENAME = DOMAIN_NAME;

/* DEFAULTCONFERENCEGROUP + DEFAULTCONFERENCESERVER
 * default values for joingroupchat form
 */
var DEFAULTCONFERENCEROOM = "talks";
var DEFAULTCONFERENCESERVER = "conference."+SITENAME;

var DEFAULTRESOURCE = "jwchat";
var DEFAULTPRIORITY = "10";

/* debugging options */
var DEBUG = false; // turn debugging on
var DEBUG_LVL = 2; // debug-level 0..4 (4 = very noisy)

var USE_DEBUGJID = false; // if true only DEBUGJID gets the debugger
var DEBUGJID = "postmaster@"+SITENAME; // which user get's debug messages

// most probably you don't want to change anything below

var timerval = 2000; // poll frequency in msec

var stylesheet = "jwchat.css";
var THEMESDIR = "themes";

