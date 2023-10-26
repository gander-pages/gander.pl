---
title: "Pimcore: Action Argument Resolving"
subtitle: "Migration from ParamConverter to MapEntity"
tags: [ Pimcore, ParamConverter, MapEntity, DataObjectParam, Symfony, Symfony 6.2 ]
---

# {{ $frontmatter.title }}

## {{ $frontmatter.subtitle }}

To get an unpublished object as a non-admin user, you need to prepare this configuration

### Pimcore 10.x

Uses:
+ `\Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter`
+ `\Pimcore\Bundle\CoreBundle\Request\ParamConverter\DataObjectParamConverter`

```php
class SomeController extends AbstractController {
    #[Route('/data/{object}/get')]
    #[ParamConverter(name: 'object', options: ['unpublished' => true])]    
    public function getDataAction(DataObject $object): Response {}
}
```

### Pimcore 11.x

Uses:
+ `\Symfony\Bridge\Doctrine\Attribute\MapEntity`
+ `\Pimcore\Bundle\CoreBundle\Request\ParamResolver\DataObjectParamResolver`
+ `\Pimcore\Request\Attribute\DataObjectParam`

```php
class SomeController extends AbstractController {
    #[Route('/data/{object}/get')]
    public function getDataAction(
        #[DataObjectParam(unpublished: true)] DataObject $object
    ): Response {}
}
```

## References

[New in Symfony 6.2: Built-in Cache, Security, Template and Doctrine Attributes](https://symfony.com/blog/new-in-symfony-6-2-built-in-cache-security-template-and-doctrine-attributes)


