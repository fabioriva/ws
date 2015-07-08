#!/usr/bin/perl -l
# file: setPlcDateTime.pl
# Webservice PLC Date / Time sync
# v1.0.1.20120808
# Copyright (c) 2012 FR

use strict;
use Net::Ping;
use WebService::DateTime;

use constant TIME_SERVER_PORT => 2011;

use constant PLC_00 => '192.168.200.3';		# DUMMY
use constant PLC_01 => '140.80.25.12';		# Kamla Nagar ( Right )
use constant PLC_02 => '140.80.25.22';		# Kamla Nagar ( Left )
use constant PLC_03 => '140.80.32.12';		# Arlozorov
use constant PLC_04 => '140.80.4.2';		# Iron Bank
use constant PLC_05 => '140.80.15.12';		# Jameson House EL N
use constant PLC_06 => '140.80.15.13';		# Jameson House EL S
use constant PLC_07 => '140.80.15.22';		# Jameson House SH N
use constant PLC_08 => '140.80.15.23';		# Jameson House SH S
use constant PLC_09 => '140.80.35.3';		# I-Park

my $p = Net::Ping->new("icmp", 1);

#if ($p->ping(PLC_00)) {
#	setDateTime(PLC_00, TIME_SERVER_PORT, 'Asia/Kolkata');
#}

if ($p->ping(PLC_01)) {
	setDateTime(PLC_01, TIME_SERVER_PORT, 'Asia/Kolkata');
}
if ($p->ping(PLC_02)) {
	setDateTime(PLC_02, TIME_SERVER_PORT, 'Asia/Kolkata');
}
if ($p->ping(PLC_03)) {
	setDateTime(PLC_03, TIME_SERVER_PORT, 'Asia/Jerusalem');
}
if ($p->ping(PLC_04)) {
	setDateTime(PLC_04, TIME_SERVER_PORT, 'Pacific/Auckland');
}
if ($p->ping(PLC_05)) {
	setDateTime(PLC_05, TIME_SERVER_PORT, 'America/Vancouver');
}
if ($p->ping(PLC_06)) {
	#setDateTime(PLC_06, TIME_SERVER_PORT, 'America/Vancouver');
}
if ($p->ping(PLC_07)) {
	setDateTime(PLC_07, TIME_SERVER_PORT, 'America/Vancouver');
}
if ($p->ping(PLC_08)) {
	#setDateTime(PLC_08, TIME_SERVER_PORT, 'America/Vancouver');
}
if ($p->ping(PLC_09)) {
	setDateTime(PLC_09, TIME_SERVER_PORT, 'America/Sao_Paulo');
}
