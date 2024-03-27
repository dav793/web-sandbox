FROM node:20-alpine AS node
FROM alpine:3.19
COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin
RUN apk update

RUN apk add --no-cache tzdata
ENV TZ=America/Costa_Rica

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories
RUN apk update

RUN apk --no-cache add curl

RUN npm install -g typescript@5.4.3
RUN npm install -g @angular/cli@17.3.1

WORKDIR /projects