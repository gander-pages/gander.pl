---
title: Doctrine DebugStack with Symfony Console Table
tags: [doctrine, debugstack, symfony, console, table]
---
# {{ $frontmatter.title }}

```php
$logger = new DebugStack();
$db->getConfiguration()->setSQLLogger($logger);

// ...

$tbl = new Table($output);
$tbl->setHeaders(['sql', 'params', 'types', 'executionMS']);
$tbl->addRows(array_map(function (array $item) {
    return array_map(function ($item) {
        return is_array($item) ? implode(',', $item) : $item;
    }, $item);
}, $logger->queries));
$tbl->render();

class DebugStackTable extends DebugStack
{
    /**
     * @var OutputInterface
     */
    private $output;

    public function __construct(OutputInterface $output)
    {
        $this->output = $output;
    }

    public function render()
    {
        $table = new Table($this->output);
        $table->setHeaders(['sql', 'params', 'types', 'executionMS']);
        $table->addRows(array_map(function(array $item){
            return array_map(function($item){
                return is_array($item) ? implode(',', $item) : $item;
            }, $item);
        }, $this->queries));
        $table->render();
    }
}
```
