# Docker Compose v2 - new dev hacks

    has_container_up() {
      docker compose ps "${1:-dev}" --status running >/dev/null 2>&1
    }

    warn_container_up() {
      has_container_up "${1:-dev}"
      RESULT=$?

      if [ $RESULT -gt 0 ]; then
        echo "${1} NOT RUNNING"
      fi

      return $RESULT
    }

    exec_container_up() {
      CONTAINER="${1:-dev}"

      warn_container_up "${CONTAINER}"

      RESULT=$?

      if [ $RESULT -gt 0 ]; then
        return $RESULT
      fi

      if [ $# -gt 1 ]; then
        shift
        docker compose exec "${CONTAINER}" "${@}"
      else
        docker compose exec "${CONTAINER}" bash
      fi
    }

    dev() {
      exec_container_up dev "${@}"
    }

    gander_dev() {
      docker run --rm -it -p "80:80" -v "$PWD:/www" "gander/dev:${1:-8.1}" "${2:-bash}"
    }

hack

 

result

`dev`

  →  

`docker compose exec dev bash`

`dev bash`

  →  

`docker compose exec dev bash`

`dev pwd`

  →  

`docker compose exec dev pwd`

[« Symfony 5/6](symfony.html)

[jQuery getScript alternative »](jquery-getscript-alternative.html)


