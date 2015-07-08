#!/usr/bin/perl
use strict;
use warnings;
use IO::Socket;

my $client = IO::Socket::INET->new( PeerAddr	=> '192.168.20.254',
									PeerPort	=> 2001,
									Proto		=> 'tcp' );
									
die "Can't create client socket: $!\n" unless $client;


my @data = ();
my @mesg = ();
my @byte = (0) x 2;
my $data = undef;
my $len  = 0;
my $ref  = 0;

@data = s7_message( 0x73, 0x61, 0x31, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);
@data = s7_message( 0x73, 0x62, 0x31, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);
@data = s7_message( 0x73, 0x63, 0x31, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);

@data = s7_message( 0x73, 0x61, 0x32, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);
@data = s7_message( 0x73, 0x62, 0x32, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);
@data = s7_message( 0x73, 0x63, 0x32, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
push(@mesg, $data);

$ref = 100;
short_to_byte( $ref, $byte[0], $byte[1] );
@data = s7_message( 0x74, 0x61, 0x31, 0x30, $byte[1], $byte[0] );
$data = pack( "C8", @data );
push(@mesg, $data);

$ref = 1055;
short_to_byte( $ref, $byte[0], $byte[1] );
@data = s7_message( 0x74, 0x62, 0x31, 0x30, $byte[1], $byte[0] );
$data = pack( "C8", @data );
push(@mesg, $data);

$ref = 10;
short_to_byte( $ref, $byte[0], $byte[1] );
@data = s7_message( 0x74, 0x63, 0x31, 0x30, $byte[1], $byte[0] );
$data = pack( "C8", @data );
push(@mesg, $data);

foreach my $msg (@mesg) {
	$len = $client->send($msg);
	print "Sent message : ".$msg."\n";
	$client->recv( my $recv, 8, 0 );
	print "Recv message : ".$recv."\n";
	my @data = unpack( "C8", $recv);
	foreach my $b (@data) {
		print $b."\n";
	}
	sleep(1);
}

$client->close or warn $@;

print "Request System Map -------------------------------------\n";

$client = IO::Socket::INET->new( PeerAddr	=> '192.168.20.254',
									PeerPort	=> 2002,
									Proto		=> 'tcp' );
									
die "Can't create client socket: $!\n" unless $client;

@data = s7_message( 0x6d, 0x30, 0x30, 0x30, 0x30, 0x30 );
$data = pack( "C8", @data );
$len = $client->send($data);
print "Sent message : ".$data."\n";
$client->recv( my $recv, 260, 0 );
print "Recv message : ".$recv."\n";
my @map = unpack( "n130", $recv);
foreach my $stall (@map) {
	print $stall."\n";
}
$client->close or warn $@;

sub s7_message
{
	my @a = ();
	push(@a, 0x02 );
	push(@a, $_[0]);
	push(@a, $_[1]);
	push(@a, $_[2]);
	push(@a, $_[3]);
	push(@a, $_[4]);
	push(@a, $_[5]);
	push(@a, 0x03 );
	return @a;
}

sub short_to_byte
{
	$_[1] = $_[0] & 0xff;
	$_[0] >>= 8;
	$_[2] = $_[0] & 0xff;
	return $_[0];	
}