---
title: "Sentry: Feature Flags"
tags: [ sentry, self-hosted, early features ]
outline: [ 2, 3 ]
---

# {{ $frontmatter.title }}

[Docs: Feature Flags](https://develop.sentry.dev/api-server/application-domains/feature-flags/)

## Permanent flags

[Code: permanent flags](https://github.com/getsentry/sentry/blob/master/src/sentry/features/permanent.py)

```
"organizations:advanced-search",
"organizations:anomaly-detection-alerts",
"organizations:app-store-connect-multiple",
"organizations:change-alerts",
"organizations:codecov-integration",
"organizations:crash-rate-alerts",
"organizations:custom-metrics",
"organizations:custom-symbol-sources",
"organizations:dashboards-basic",
"organizations:dashboards-edit",
"organizations:data-forwarding",
"organizations:discover-basic",
"organizations:discover-query",
"organizations:dynamic-sampling",
"organizations:event-attachments",
"organizations:global-views",
"organizations:incidents",
"organizations:integrations-alert-rule",
"organizations:integrations-chat-unfurl",
"organizations:integrations-codeowners",
"organizations:integrations-enterprise-alert-rule",
"organizations:integrations-enterprise-incident-management",
"organizations:integrations-event-hooks",
"organizations:integrations-incident-management",
"organizations:integrations-issue-basic",
"organizations:integrations-issue-sync",
"organizations:integrations-stacktrace-link",
"organizations:integrations-ticket-rules",
"organizations:metric-alert-chartcuterie",
"organizations:on-demand-metrics-prefill",
"organizations:org-ingest-subdomains",
"organizations:performance-view",
"organizations:profiling-view",
"organizations:relay",
"organizations:remote-config",
"organizations:seer-based-priority",
"organizations:sentry-pride-logo-footer",
"organizations:session-replay",
"organizations:span-stats",
"organizations:spans-usage-tracking",
"organizations:sso-basic",
"organizations:sso-saml2",
"organizations:team-insights",
"organizations:team-roles",
"projects:custom-inbound-filters",
"projects:data-forwarding",
"projects:discard-groups",
"projects:rate-limits",
"projects:servicehooks",
```

## Temporary flags

+ [Code: temporary flags](https://github.com/getsentry/sentry/blob/master/src/sentry/features/temporary.py)

### Early Adopters

```
"organizations:anr-analyze-frames",
"organizations:device-classification",
"organizations:gitlab-disable-on-broken",
"organizations:mobile-cpu-memory-in-transactions",
"organizations:performance-metrics-backed-transaction-summary",
"organizations:performance-new-trends",
"organizations:performance-new-widget-designs",
"organizations:performance-span-histogram-view",
"organizations:performance-transaction-name-only-search-indexed",
"organizations:profiling-global-suspect-functions",
"organizations:user-feedback-ui",
```
