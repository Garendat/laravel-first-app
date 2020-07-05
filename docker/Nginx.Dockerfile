FROM nginx

ADD docker/conf/vhost.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/laravel-docker

RUN chown -R $USER:$USER /var/www/laravel-docker



