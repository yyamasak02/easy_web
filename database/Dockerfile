FROM postgres:16

ENV TZ=Asia/Tokyo
ENV LANG=ja_JP.utf8
ENV LANGUAGE=ja_JP:ja
ENV LC_ALL=ja_JP.utf8

RUN apt-get update && \
    apt-get install -y locales tzdata && \
    sed -i -e 's/# ja_JP.UTF-8 UTF-8/ja_JP.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen ja_JP.UTF-8 && \
    ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    rm -rf /var/lib/apt/lists/*
