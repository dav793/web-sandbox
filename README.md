# Web Sandbox

## Requirements
* Docker 20.10.20

## Installation

1. **Make sure Docker is installed and running**

    [Get Docker](https://docs.docker.com/get-docker/).

2. **Clone repo**

    ```bash
    git clone https://github.com/dav793/web-sandbox.git
    ``` 

3. **Copy config files and set environment vars**

    Mac OS / Linux:
    ```bash
    cp -n .env.template .env
    ```

    Windows:
    ```cmd
    if not exist .env copy .env.template .env
    if not exist .env.bat copy .env.bat.template .env.bat
    ```

4. **Add execution perms for bash scripts**

    Skip this step if running on Windows.

    Mac OS / Linux:
    ```bash
    chmod u+x *.sh
    ```

5. **Create docker network if not exists**

    Mac OS/Linux:
    ```bash
    source .env && docker network create --driver bridge ${NETWORK_NAME} 
    ```

    Windows:
    ```cmd
    call .env.bat 
    docker network create --driver bridge %NETWORK_NAME% 
    ```

6. **Create docker volume if not exists**

    Mac OS/Linux:
    ```bash
    source .env && docker volume create --driver local --opt type=none --opt device=${WORKING_DIR} --opt o=bind ${VOLUME_NAME}
    ```

    Windows:
    ```cmd
    call .env.bat
    docker volume create --driver local --opt type=none --opt device=%WORKING_DIR% --opt o=bind %VOLUME_NAME%
    ```

7. **Done** 

    See [Run](#run).

## Uninstall

Mac OS / Linux / Windows:
```bash
docker container rm web-sandbox-client
docker image rm web-sandbox-client
```

## Run

1. **Start container with docker compose**

    Mac OS / Linux / Windows:
    ```bash
    docker compose --env-file .env -f docker-compose.yml up
    ```

2. **Open shell in container**

    Mac OS / Linux / Windows:
    ```bash
    docker exec -it web-sandbox-client /bin/sh
    ```

3. **Go to examples directory, install dependencies and run**

    ```bash
    cd examples/introduction

    npm install

    npm start
    ```