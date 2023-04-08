# Symfony 5/6

## Symfony Form Validation


Constraints `EqualTo` and `NotEqualTo`, has a `propertyPath` attribute,
which starts traverse from "self" field instance (displayed as `Form`),
so, to compare other field, must go to "root" form instance.

```php
$this->createFormBuilder()
  ->add('field_one')
  ->add('field_two', [
    'constraints' => [
      new NotEqualTo(propertyPath: 'root[field_one].data'),
    ]
  ])
  ->getForm();
```

## IDE helper


[Framework: IDE](https://symfony.com/doc/current/reference/configuration/framework.html#ide)
&plus;
[PhpStorm URL Handler](https://github.com/sanduhrs/phpstorm-url-handler)

`config/local/framework.yaml`:

```yaml
framework:
    ide: phpstorm://open?file=%%f&line=%%l&/www/project.localhost/>/home/user/PhpstormProjects/project/
```
