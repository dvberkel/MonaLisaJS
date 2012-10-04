#! /usr/bin/env perl

use strict;
use warnings;

while (my $line = <>) {
    next unless $line =~ m/<circle cx="(\d+\.\d+)" cy="(\d+\.\d+)"/;
    print "$1 $2\n";
}
