# BOTBLE-GRAPHQL-NEXT

[![](https://img.shields.io/docker/pulls/nghiepit/botble-graphql-next?label=botble-graphql-next&style=flat-square)](https://hub.docker.com/r/nghiepit/botble-graphql-next)
[![](https://images.microbadger.com/badges/version/nghiepit/botble-graphql-next.svg)](https://hub.docker.com/r/nghiepit/botble-graphql-next)

> https://graphql-next.toiyeulaptrinh.com
>
> The migration for Botble from CMS(Laravel) to GraphQL + Next.js

## Prerequisites

- [NodeJS](https://nodejs.org)
- [Yarnpkg](https://yarnpkg.com)
- [Docker](https://docker.com)

## Getting started

_The first you need clone the `.env.example` to `.env` file and overwrite your environments._
_Check the APIs document https://github.com/nghiepit/botble-graphql_

- For development

```bash
$ yarn install
$ yarn dev
```

## Build Docker image

```bash
$ docker build --build-arg APP_VERSION=0.0.1 -t nghiepit/botble-graphql-next:0.0.1 .
```

## Deploy Docker

```bash
$ docker run --restart=unless-stopped -p 3000:3000 -d nghiepit/botble-graphql-next:0.0.1
```

## Style guides and rules

- [Conventional commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) to make the world nice
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Tech stack

- [Next.js](https://nextjs.org)
- [urql](https://github.com/FormidableLabs/urql)
- [React Hooks](https://github.com/streamich/react-use)
- [Ramda.js](https://ramdajs.com)
- [Tailwindcss](https://tailwindcss.com)
- [PostCSS](https://postcss.org)
- [Iconify](https://iconify.design)
- [date-fns](https://date-fns.org) FP only
- [tiny-slider](https://github.com/ganlanyuan/tiny-slider)
- [lightbox](https://github.com/biati-digital/glightbox)

## License

[Nghiep] <me@nghiepit.dev>
