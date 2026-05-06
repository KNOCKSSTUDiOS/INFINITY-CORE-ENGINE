# Restore hollywoodimaging.studio to a working state

Current outage: domain is fronted by Cloudflare (orange-cloud proxy),
which is forwarding to a blocked Vercel deployment. Public site
returns `HTTP/2 402  x-vercel-error: DEPLOYMENT_DISABLED`.

The Cloudflare-proxied A records still point at Cloudflare's anycast
range (`104.21.x.x` / `172.67.x.x`); the Vercel hop is the part that's
failing. Two paths to bring the site back. Pick one.

---

## Path A — fastest restore (5 min): GitHub Pages

This repo now ships `.github/workflows/deploy-pages.yml`. As soon as the
workflow runs once on `main`, the static engine is published to
`https://knocksstudios-labs.github.io/INFINITY-CORE-ENGINE/` and, with
the steps below, served at `https://hollywoodimaging.studio`.

### 1. Enable Pages (one-time)

GitHub → repo Settings → Pages
- Source: **GitHub Actions**
- Custom domain: **hollywoodimaging.studio**
- Enforce HTTPS: **on** (after the cert provisions; takes ≤ 15 min)

### 2. Uninstall Vercel

GitHub → repo Settings → Integrations → GitHub Apps → **Vercel → Uninstall**.
Stops the failing `Vercel: Account is blocked` status check on every PR.

### 3. Cloudflare DNS swap

Cloudflare → DNS → records for `hollywoodimaging.studio`. Replace the
existing A/AAAA records with these and **set proxy status to "DNS only"
(grey cloud)** — not "Proxied".

```
Type   Name   Value              Proxy
A      @      185.199.108.153    DNS only
A      @      185.199.109.153    DNS only
A      @      185.199.110.153    DNS only
A      @      185.199.111.153    DNS only
CNAME  www    knocksstudios-labs.github.io   DNS only
```

Delete any record with target `cname.vercel-dns.com`,
`*.vercel.app`, or anything in the `76.76.21.0/24` range — that's
the broken Vercel hop.

### 4. Verify

```
curl -sI https://hollywoodimaging.studio | head -5
# expect: HTTP/2 200, server: GitHub.com (no x-vercel-* headers)
```

---

## Path B — production target: Google Cloud Run + LB

You've already provisioned `hyper-cinema-ip`, `hyper-cinema-cert`,
`hyper-cinema-rule` (see `gcloud` script in repo root). To use it:

### 1. Move authoritative DNS to Cloud DNS

At the registrar, set nameservers to:
```
ns-cloud-a1.googledomains.com
ns-cloud-a2.googledomains.com
ns-cloud-a3.googledomains.com
ns-cloud-a4.googledomains.com
```
**This removes Cloudflare from the picture entirely.** If you'd rather
keep Cloudflare's DNS, just point the existing records at the LB IP
(below) with proxy status set to "DNS only".

### 2. Get the LB IP and create records

```bash
LB_IP=$(gcloud compute addresses describe hyper-cinema-ip \
  --global --format='value(address)')
echo "$LB_IP"
```

Create in Cloud DNS (or Cloudflare DNS-only):
```
A      @     $LB_IP
A      www   $LB_IP
```

### 3. Verify cert + service

```bash
gcloud compute ssl-certificates describe hyper-cinema-cert --global \
  --format='value(managed.status,managed.domainStatus)'
# wait for ACTIVE on both domains
curl -sI https://hollywoodimaging.studio | head -5
# expect: HTTP/2 200, server: Google Frontend
```

---

## Either path: kill the Vercel signal completely

- Repo Settings → Branches → main → required status checks: remove
  any reference to `Vercel`.
- Repo Settings → Integrations → GitHub Apps: uninstall Vercel.
- Cloudflare zone → DNS: delete every record whose target contains
  `vercel-dns.com` or `vercel.app`.
- Vercel dashboard (if you can still log in): Project → Settings →
  Git → disconnect the GitHub repo.
