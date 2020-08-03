FROM nginx
EXPOSE 80
ADD . /usr/share/nginx/html
ADD hellocockatiel.conf /etc/nginx/conf.d/default.conf

