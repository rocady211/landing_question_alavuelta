FROM nginx:alpine

COPY a_la_vuelta_landing.html /usr/share/nginx/html/index.html
COPY imagenes /usr/share/nginx/html/imagenes

EXPOSE 80
