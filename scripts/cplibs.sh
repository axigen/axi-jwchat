#!/bin/bash
if [ ! -e ./lib/jsjac ]; then
  echo "jsjac is missing, checking out ..."
  svn co http://svn.jwchat.org/jsjac/trunk lib/jsjac
  echo "building jsjac ..."
  make -C lib/jsjac
  echo "done"
fi

for i in ./lib/*; do for j in $i/*.{js,html}; do if [ -e "$j" ]; then cp "$j" ./htdocs; for k in ./htdocs.*; do cp "$j" "$k"; done ; fi; done; done;
