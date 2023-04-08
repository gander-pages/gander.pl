# Code Snippets

## Adminer fast select tables by prefix

```js
$('input[type="checkbox"][name="tables[]"][value^="prefix_"').trigger('click');
$('input[type="checkbox"][name="data[]"][value^="prefix_"').trigger('click');
```

## MySQL utf8 default charset in my.cnf

```ini
[mysqld]
collation-server     = utf8mb4_general_ci
character-set-server = utf8mb4
```

## RegEx

| pattern | description                 |
|:-------:|-----------------------------|
| `(?: )` | Non-capturing group         |
| `(?! )` | Prevents matching a pattern |

[https://www.regular-expressions.info/lookaround.html](https://www.regular-expressions.info/lookaround.html)
