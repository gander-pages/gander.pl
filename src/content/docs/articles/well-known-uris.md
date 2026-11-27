---
lastUpdated: 2026-11-27T11:15:00+01:00
title: /.well-known/ in practice
description: What the /.well-known/ directory (RFC 8615) is, and five hand-picked paths, from security.txt to mercure.
topic: devops
tags: [well-known, rfc 8615, security, tls, openid connect, webauthn, passkeys, mercure, symfony]
---

The `/.well-known/` directory is a reserved place at the root of a domain where services publish files under **names agreed in advance**. This way a browser, a certificate authority, an OAuth client or a password manager knows where to look for information about a site, without any prior configuration. The rules are defined in [RFC 8615](https://www.rfc-editor.org/rfc/rfc8615), and IANA maintains the list of names.

The registry has more than a hundred entries today, but most of them concern IoT, telecoms or niche protocols. Below are five that I picked as interesting: `security.txt` first, then the rest ordered from the most commonly used.

## security.txt

A contact for people who have found a vulnerability ([RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)). It is read by security researchers, bug bounty platforms and scanners. The `Contact` and `Expires` fields are required.

```text
Contact: mailto:security@example.com
Expires: 2027-11-27T00:00:00.000Z
Preferred-Languages: en, pl
Policy: https://example.com/security-policy
```

Set a reminder before the `Expires` date, because scanners report an expired file as an error.

Two handy tools: [securitytxt.org](https://securitytxt.org/) explains the format and generates the file, and [securitytxts.com](https://securitytxts.com/) validates it against RFC 9116, also through an API you can call from CI.

## acme-challenge

Domain validation when a TLS certificate is issued (the HTTP-01 challenge from [RFC 8555](https://www.rfc-editor.org/rfc/rfc8555#section-8.3)). Let's Encrypt and other ACME certificate authorities fetch the file over plain HTTP on port 80. The file is created by the client: certbot, Caddy, Traefik or cert-manager.

```text
GET /.well-known/acme-challenge/LoqXcYV8q5ONbJQxbmR7SCTNo3tiAXDfowyjxAjEuX0

LoqXcYV8q5ONbJQxbmR7SCTNo3tiAXDfowyjxAjEuX0.9jg46WB3rR_AHD-EBXdN7cBkH1WOu0tA3M9fm21mqTI
```

The most common problem: a redirect to HTTPS, or a reverse proxy rule that catches the path before it reaches the ACME client.

## openid-configuration

OpenID Connect provider metadata ([OIDC Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)): endpoint URLs, the location of the JWKS keys, supported algorithms. Client libraries configure themselves from nothing more than the issuer URL. It is used by, among others, `OidcTokenHandler` in Symfony, `openid-client` in Node, Keycloak and Entra ID.

```json
{
  "issuer": "https://id.example.com",
  "authorization_endpoint": "https://id.example.com/auth",
  "token_endpoint": "https://id.example.com/token",
  "jwks_uri": "https://id.example.com/certs",
  "response_types_supported": ["code"]
}
```

For plain OAuth 2.0, the equivalent is `oauth-authorization-server` ([RFC 8414](https://www.rfc-editor.org/rfc/rfc8414)).

## webauthn

A list of domains that may use the same passkey ([WebAuthn Level 3, Related Origin Requests](https://www.w3.org/TR/webauthn-3/#well-known-uri-registration)). It helps when one service runs under several domains, for example `.com` and `.pl`. The browser fetches the file from the RP ID domain and checks whether the calling origin is on the list. On the server side it is supported by, among others, `web-auth/webauthn-framework` (Symfony) and SimpleWebAuthn (Node).

```json
{
  "origins": ["https://example.com", "https://example.pl"]
}
```

## mercure

The default hub URL of [Mercure](https://mercure.rocks/spec), a protocol for pushing updates from the server to the browser over Server-Sent Events. The publisher sends updates with POST, and the subscriber opens an `EventSource` with a `topic` parameter. In the Symfony ecosystem it is the standard: MercureBundle, API Platform and the Symfony Docker template with the Mercure module in Caddy.

```js
const url = new URL('https://example.com/.well-known/mercure');
url.searchParams.append('topic', 'https://example.com/books/1');

new EventSource(url).onmessage = (event) => console.log(JSON.parse(event.data));
```

An API can point to the hub with the header `Link: <https://example.com/.well-known/mercure>; rel="mercure"`.

## Full list

All registered paths, with links to their specifications, are in the IANA registry: [Well-Known URIs](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml).
