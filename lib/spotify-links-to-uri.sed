#!/bin/sed -f

# usage: ./spotify-links-to-uri.sed < links.txt

/^https:\/\/open.spotify\.com/!d

s/^https:\/\/open.spotify\.com/spotify/g;
s/\?.*$//;
s/\//:/g;
