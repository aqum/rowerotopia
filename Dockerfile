FROM jekyll/jekyll:pages

RUN apk update && \
    apk add libffi-dev g++ make

RUN mkdir src
COPY src/Gemfile src/Gemfile.lock ./src/
RUN cd src && bundle install

WORKDIR /app
