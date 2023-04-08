# Ubuntu: error while loading shared libraries

1.  Run `ldd <executable>` to find missing libraries.
2.  Run `dpkg -S <missing lib>` to find packages, containing them.
3.  Install missing libs. Sometimes use `:i386` instead `:amd64`.



[« Debian CheatSheet](debian-cheatsheet.html)

[Code Snippets »](code-snippets.html)


