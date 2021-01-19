#!/usr/bin/env bash
#
# Usage:
#   build/setup.sh <function name>

set -o nounset
set -o pipefail
set -o errexit

deps() {
  # prerequisites:
  # dominate
  # cmark
  python3.9 -m pip install -U dominate
}

md-to-html() {
  cmark "${1}"
}

gen() {
  python3.9 build/htmlgen.py
}

html() {
  mkdir -p _site
  gen > _site/index.html
}

all() {
  deps
  md-to-html "${@}"
  gen
  html
}

if [ $# -eq 0 ]; then
  echo "usage: $0 <function name>"
  echo "functions: deps, md-to-html, gen, html, all"
  exit 1
fi

"$@"
