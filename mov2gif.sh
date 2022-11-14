#!/bin/sh
if [ $# = 2 ]; then
    ffmpeg -i $1 -filter_complex "[0:v] fps=10,scale=800:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse=dither=none" $2
fi
