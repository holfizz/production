cd ~/production
npm run build:prod

rm -rf ~/../var/www/production/html
mv ~/production/build ~/../var/www/production/html

