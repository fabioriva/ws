# file: S7DateTime.pm
# Aps web service
# Copyright (c) 2012 FR

package WebService::DateTime;

use strict;
use IO::Socket;
use DateTime;

use vars qw(@ISA @EXPORT);
require Exporter;
@ISA = 'Exporter';
@EXPORT = qw(setDateTime);


sub setDateTime {

	my $host = shift or die "Usage : host address required !";
	my $port = shift or die "Usage : port number required !";
	my $zone = shift or die "Usage : timezone number required !";
	
	my @data = ();
	my $data = undef;
	my $client = undef;														# recv $ scalar data
	my $len = 0;

	$client = IO::Socket::INET->new(PeerAddr => $host, PeerPort	=> $port, Proto	=> 'tcp' );
										
	die "Can't create client socket: $!\n" unless $client;

	my $days = set_date($zone);
	my $msec = set_time($zone);

	@data = s7_message( 0x77, 420, 12, 2, $days );		# set date
	$data = pack( "C16", @data );

	$len  = $client->send($data);
	if($len == 16) {

		@data = s7_message( 0x77, 420, 14, 4, $msec );	# set time
		$data = pack( "C16", @data );

		$len  = $client->send($data);
		if($len == 16) {

				@data = s7_message( 0x63, 0, 0, 0, 0 );	# set system clock (SFC0)
				$data = pack( "C16", @data );
				$len  = $client->send($data);
		}
	}

	$client->close or warn $@;
}

sub s7_message {
	my @a = ();
	my @byte = (0) x 4;
	my $mode = $_[0];
	my $dbnr = $_[1];
	my $init = $_[2];
	my $len  = $_[3];
	my $val  = $_[4];
	
	push( @a, 0x02 );													# STX
	push( @a, 0x10 );													# Msg len
	push( @a, $mode );													# Mode date: 0x64, time: 0x74  
	push( @a, 0x84 );													# Type E: 0x81, A: 0x82, M: 0x83, D: 0x84
	short_to_byte( $dbnr, $byte[0], $byte[1] );
	push( @a, $byte[1] );												# Db
	push( @a, $byte[0] );												# Db
	short_to_byte( $init, $byte[0], $byte[1] );
	push( @a, $byte[1] );												# Byte init
	push( @a, $byte[0] );												# Byte init
	short_to_byte( $len,  $byte[0], $byte[1] );
	push( @a, $byte[1] );												# Byte len
	push( @a, $byte[0] );												# Byte len 
	long_to_byte ( $val,  $byte[0], $byte[1], $byte[2], $byte[3]  );
	push( @a, $byte[3] );												# Buffer
	push( @a, $byte[2] );												# Buffer
	push( @a, $byte[1] );												# Buffer	
	push( @a, $byte[0] );												# Buffer	
	push( @a, 0x00 );
	push( @a, 0x03 );													# ETX 
	return @a;
}

sub short_to_byte {
	$_[1] = $_[0] & 0xff;
	$_[0] >>= 8;
	$_[2] = $_[0] & 0xff;
	return $_[0];	
}

sub byte_to_short {
	$_[0] <<= 8;
	return $_[0] | $_[1];	
}

sub long_to_byte {
	$_[1] = $_[0] & 0xff;
	$_[0] >>= 8;
	$_[2] = $_[0] & 0xff;
	$_[0] >>= 8;
	$_[3] = $_[0] & 0xff;
	$_[0] >>= 8;
	$_[4] = $_[0] & 0xff;
	return $_[0];	
}

sub byte_to_long {
	$_[0] <<= 24;
	$_[1] <<= 16;
	$_[2] <<= 8;
	return $_[0] | $_[1] | $_[2] | $_[3];
}

sub get_date {
# 	Number of days since 1990-01-01
	my $dt = DateTime->new( year => 1990, month => 1, day => 1 );
	return $dt->add( days =>  $_[0] )->date();
}

sub set_date {
# 	Number of days since 1990-01-01
	my $tz = $_[0];
	my $dt1 = DateTime->new( year => 1990, month => 1, day => 1 );
	my $dt2 = DateTime->now( time_zone => $tz );
	my $days = $dt1->delta_days($dt2)->delta_days;
	return $days;
}

sub get_time {	
# 	Number of milliseconds since 00:00:00.000
	my $msec = $_[0];
	my $h = floor( $msec / 3_600_000 );
	my $m = floor(( $msec % 3_600_000 ) / 60_000 );
	my $s = floor((( $msec % 3_600_000 ) % 60_000 ) / 1000 );
	my $ms = ((( $msec % 3_600_000 ) % 60_000 ) % 1000 );
	my $ns = $ms * (10)**6;
	my $dt = DateTime->new(
							year	   => 2012,
							hour 	   => $h,
							minute     => $m,
							second     => $s,
							nanosecond => $ns
							);
	return $dt->strftime("%H:%M:%S.%N");
}

sub set_time {	
# 	Number of milliseconds since 00:00:00.000
	my $tz = $_[0];
	my $dt = DateTime->now( time_zone => $tz );
	my $h  = $dt->hour();
	my $m  = $dt->minute();
	my $s  = $dt->second();
	my $ms = $dt->millisecond();
	my $ms_h = $h * 3_600_000;
	my $ms_m = $m * 60_000;
	my $ms_s = $s * 1000;
	my $milliseconds = $ms_h + $ms_m + $ms_s + $ms;
	return $milliseconds;
}
