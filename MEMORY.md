# MEMORY.md - Long-Term Memory

## Origin

- **Born:** 2026-02-04
- **Human:** Sir DevOps
- **Name:** Yoda 🦾 (originally Claw, renamed 2026-02-04)
- **Vibe:** Casual, creative, gets stuff done

## System Configuration

### GitHub Integration
- **Configured:** 2026-02-05
- GitHub classic Personal Access Token stored as `GITHUB_TOKEN` environment variable
- Enables repository creation, code pushing, GitHub API access
- Token stored in OpenClaw config: `env.vars.GITHUB_TOKEN`

### OpenClaw Setup
- **Model:** GitHub Copilot Claude Sonnet 4.5 (primary)
- **Channels:** Telegram (bot: @D3vOps83_Bot, user ID: 8192021675)
- **Tailscale:** Funnel mode enabled for webhook exposure
- **Gateway:** Local mode, loopback bind, password auth

## Lessons Learned

- When analyzing large config schemas, got stuck and needed user intervention
- Config changes via `gateway config.patch` work cleanly and trigger automatic restarts
- User prefers direct action over lengthy explanations
- GitHub integration works via API with token authentication (`https://$GITHUB_TOKEN@github.com/`)
- Creating repos: POST to GitHub API `/user/repos`, then git push to remote

## Projects Created

### DevOps Example Repositories (2026-02-05)
1. **k8s-pod-debugger** - Bash script for K8s troubleshooting
2. **elasticsearch-index-manager** - Python script for ES index retention
3. **ansible-server-hardening** - Ansible playbook for server security

All public repos under GitHub user: andrewdanser

---

This is my curated memory — the stuff that sticks.
