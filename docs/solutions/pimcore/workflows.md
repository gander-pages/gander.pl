---
title: "Pimcore: Workflow Management"
tags: [ Pimcore, Workflow ]
---

# {{ $frontmatter.title }}


## [Override Pimcore Permissions On Workflow Places][places.permissions]

```yaml
pimcore:
    workflows:
        my_workflow:
            places:
                my_place:
                    permissions:
                        - condition: "is_granted('ROLE_ADMIN')"
                          publish: true
                          delete: true
                        - publish: false
                          delete: false
```


---

## Sources

+ [Modifying Pimcore Permissions Based On Workflow Places][places.permissions]

[workflow.details]: https://pimcore.com/docs/platform/Pimcore/Workflow_Management/Configuration_Details/
[places.permissions]: https://pimcore.com/docs/platform/Pimcore/Workflow_Management/Permissions/
