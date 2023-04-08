# Ansible cheatsheet

## Install

```bash
apt install python-dev python3-dev
pip install --user wheel ansible
# install RC, eg:
pip install --user wheel ansible==v2.9.0rc1
```

## The **_inventory_** skeleton

```yaml
all:
  hosts:
    my-host:
      ansible_connection: ssh
      ansible_ssh_host: 192.168.0.100
      ansible_ssh_port: 22
      ansible_ssh_user: foo
      ansible_ssh_pass: bar
```

## How to load **_dconf_** for **_root_** user?

Some research done:

*   [https://forum.antergos.com/topic/7896/gsettings-and-dconf-as-root-tutorial-sort-of](https://forum.antergos.com/topic/7896/gsettings-and-dconf-as-root-tutorial-sort-of)
*   [https://askubuntu.com/questions/1134453/how-to-run-gsettings-for-another-user-ubuntu-18-04-2-lts](https://askubuntu.com/questions/1134453/how-to-run-gsettings-for-another-user-ubuntu-18-04-2-lts)
*   [https://docs.ansible.com/ansible/2.4/become.html](https://docs.ansible.com/ansible/2.4/become.html)

**My _(working)_ solution:**

```yaml
---
- name: Load dconf settings
  command: dconf load /
  args:
    stdin: "{{ dconf_contents }}"

- name: Load dconf settings for root
  command: dbus-launch dconf load /
  args:
    stdin: "{{ dconf_contents }}"
  become: true
  become_flags: -H
```

Settings are loaded from file.
