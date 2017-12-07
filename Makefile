#!/usr/bin/make -f

all: clean
	mkdir -p ./output
	zip ./output/extension.zip LICENSE.md manifest.json jquery-3.2.1.min.js content.js day-16-2015-screenshot.png

clean:
	rm -rf ./output