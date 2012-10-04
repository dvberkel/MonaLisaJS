#! /usr/bin/env perl

use strict;
use warnings;

print <<EOH
var monalisa_network = (function(MonaLisa){
    var network = new MonaLisa.Network();
EOH
;

while(my $line = <>) {
    next unless $line =~ m/(\d+\.\d+) (\d+\.\d+)/;
    print "    network.addPoint(new MonaLisa.Point({ x : $1, y : $2 }));\n";
    
}

print <<EOF
    return network;
})(MonaLisa);
EOF
;
