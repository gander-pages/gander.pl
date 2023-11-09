---
title: "Pimcore: Workflow Management"
tags: [ Pimcore, Workflow ]
---

# {{ $frontmatter.title }}


## [Override Pimcore Permissions On Workflow Places][places.permissions]

```yaml{6-11}
pimcore:
    workflows:
        my_workflow:
            places:
                my_place:
                    permissions:
                        - condition: "is_granted('ROLE_EDITOR')"
                          publish: true
                          delete: true
                        - publish: false
                          delete: false
```

When `ROLE_EDITOR` is granted, the user can perform `publish` and `delete` operations even if its role does not have them.

::: details 
+ `condition` allows you to set an expression that must be met for a given action to be available
+ `save`, `publish`, `unpublish`, `delete`, `rename`, `view`, `settings`, `versions`, `properties` are available `DataObject` actions
+ `modify` is equivalent for `save`, `publish`, `unpublish`, `delete` and `rename`.
:::

## Sources

+ [Workflow Configuration Details][workflow.details]
+ [Modifying Pimcore Permissions Based On Workflow Places][places.permissions]

[workflow.details]: https://pimcore.com/docs/platform/Pimcore/Workflow_Management/Configuration_Details/
[places.permissions]: https://pimcore.com/docs/platform/Pimcore/Workflow_Management/Permissions/
