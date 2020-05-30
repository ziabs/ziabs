#! /bin/bash
set -e 

# Start the buid & deploy
jekyll build
name=$(date +%s)
cwd=$(pwd)
mkdir /tmp/$name
cd /tmp/$name
git init
git remote add origin git@github.com:ziabs/ziabs.git
git pull origin master
cp -r $cwd/_site/* blog/
map="<url> \\n<loc>https:\/\/ziabs.com\/<\/loc> \\n<priority>1.0<\/priority> \\n<\/url> \\n<\/urlset>"
sed -i "s/<\/urlset>/$map/g" blog/sitemap.xml
git add .
git commit -am "blog-$name"
git push origin master
cd .. 
rm -rf $name